import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

import ModalProject from "../../components/ModalProject/ModalProject.component";
import SearchBoxProject from "../../components/SearchBoxProject/SearchBoxProject.component";
import ProfileUser from "../../components/ProfileUser/ProfileUser.component";
import BoxBoards from "../../components/BoxBoards/BoxBoards.component";

import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";
import {
    fetchBoards,
    fetchSingleBoard,
    fetchUser,
    postBoard,
    putBoard,
    removeBoard,
} from "./BoardProjects.handler";

import styles from "./BoardProjects.module.css";

const BoardProjects = () => {
    const { openModalProject, indexModalProject } = useContext(ModalContext);
    const { search } = useContext(SearchContext);
    const [boards, setBoards] = useState([]);
    const [user, setUser] = useState({});

    // Get User Login
    const getUser = async () => {
        const res = await fetchUser();
        setUser(res);
    };

    // CRUD Board Projects
    const getBoards = async () => {
        const result = await fetchBoards();

        const filter = result?.content?.filter((item) =>
            item?.title?.toLowerCase().includes(search.toLowerCase())
        );

        setBoards(filter);
    };

    const createBoards = async (value) => {
        toast.promise(
            postBoard(value).then((res) => {
                getBoards();
            }),
            {
                loading: "loading...",
                success: "Successfully created project",
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
    };

    const editBoards = async (value, id) => {
        const res = await fetchSingleBoard(id);
        const payload = { ...res, title: value.title };
        toast.promise(
            putBoard(payload).then((res) => {
                getBoards();
            }),
            {
                loading: "loading...",
                success: "Successfully edited project",
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
    };

    const deleteBoards = async (id) => {
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
                removeBoard(id).then((res) => {
                    getBoards();
                }),
                {
                    loading: "loading...",
                    success: "Project has been deleted",
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
        getBoards();
        getUser();
        // eslint-disable-next-line
    }, [search]);

    return (
        <>
            <SearchBoxProject />
            <div className={styles.contentWrap}>
                <BoxBoards
                    boards={boards}
                    deleteBoards={deleteBoards}
                />
                <ProfileUser
                    user={user}
                    boards={boards}
                />
            </div>
            {openModalProject && (
                <ModalProject
                    titleModal={
                        indexModalProject === 1
                            ? "Create New Project"
                            : "Edit Title Project"
                    }
                    textBtn={indexModalProject === 1 ? "Create" : "Edit"}
                    createBoards={createBoards}
                    putBoards={editBoards}
                />
            )}
            <Toaster />
        </>
    );
};

export default BoardProjects;
