import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import InviteMembers from "../../components/InviteMembers/InviteMembers.component";
import {
    fetchDetailBoard,
    fetchTasks,
    fetchUser,
    inviteMember,
    postTask,
    putTask,
    removeTask,
} from "./DetailBoard.handler";

import styles from "./DetailBoard.module.css";
import BoxTasks from "../../components/BoxTasks/BoxTasks.component";
import ListMembers from "../../components/ListMembers/ListMembers.component";
import { ModalContext } from "../../contexts/ModalContext";
import ModalTask from "../../components/ModalTask/ModalTask.component";
import { TaskContext } from "../../contexts/TaskContext";
import Swal from "sweetalert2";

const DetailBoard = () => {
    const {
        openModalTask,
        setOpenModalTask,
        indexModalTask,
        setIndexModalTask,
    } = useContext(ModalContext);
    const { setTodo, setIndev, setDone } = useContext(TaskContext);
    const { idProject } = useParams();
    const [board, setBoard] = useState({});

    // Get Detail Board
    const getBoard = async () => {
        const res = await fetchDetailBoard(idProject);
        setBoard(res);
    };

    // Invite Members
    const getUser = async (value) => {
        try {
            const res = await fetchUser(value);
            if (board.appUsers.find((item) => item.username === res.username)) {
                toast.error("User is already a member");
            } else {
                await inviteMember(idProject, res.id, res);
                getBoard(idProject);
                toast.success("User successfully invited");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // CRUD Task
    const getTasks = async () => {
        const todo = await fetchTasks(idProject, "todo");
        const indev = await fetchTasks(idProject, "indev");
        const done = await fetchTasks(idProject, "done");
        setTodo(todo);
        setIndev(indev);
        setDone(done);
    };

    const createTask = (value) => {
        toast.promise(
            postTask(idProject, value).then((res) => {
                getTasks();
            }),
            {
                loading: "loading...",
                success: "Successfully created task",
                error: "Oops, something wrong. Please try again.",
            }
        );
    };

    const updateTask = (id, value) => {
        toast.promise(
            putTask(id, value).then((res) => {
                getTasks();
            }),
            {
                loading: "loading...",
                success: "Successfully edited task",
                error: "Oops, something wrong. Please try again.",
            }
        );
    };

    const deleteTask = async (id) => {
        const confirmDelete = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#F41C1C",
            cancelButtonColor: "#d9d9d9",
            customClass: {
                icon: "icon-class",
                confirmButton: "confirm-button-class",
                cancelButton: "cancel-button-class",
            },
        });

        if (confirmDelete.isConfirmed) {
            toast.promise(
                removeTask(id).then((res) => {
                    getTasks();
                }),
                {
                    loading: "loading...",
                    success: "Task has been deleted",
                    error: "Oops, something wrong. Please try again.",
                },
                {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                }
            );
        }
    };

    useEffect(() => {
        getBoard();
        getTasks();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Toaster />
            <div className={styles.board}>
                <div className={styles.boardHeader}>
                    <h1>{board.title}</h1>
                    <div className={styles.btnGroup}>
                        <InviteMembers getUser={getUser} />
                        <button
                            className={styles.btn}
                            onClick={() => {
                                setOpenModalTask(true);
                                setIndexModalTask(1);
                            }}>
                            Create New Task
                        </button>
                    </div>
                </div>
                <div className={styles.boardBody}>
                    <BoxTasks handleDelete={deleteTask} />
                    <ListMembers board={board} />
                </div>
            </div>
            {openModalTask && (
                <ModalTask
                    titleModal={
                        indexModalTask === 1 ? "Create New Task" : "Edit Task"
                    }
                    textBtn={indexModalTask === 1 ? "Add Task" : "Edit Task"}
                    createTask={createTask}
                    updateTask={updateTask}
                />
            )}
        </>
    );
};

export default DetailBoard;
