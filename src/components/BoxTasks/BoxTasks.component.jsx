import React, { useContext } from "react";

import { ModalContext } from "../../contexts/ModalContext";

import { TbTrashFilled, TbEdit } from "react-icons/tb";
import styles from "./BoxTasks.module.css";
import { TaskContext } from "../../contexts/TaskContext";

const BoxTasks = ({ handleDelete }) => {
    const { todo, indev, done } = useContext(TaskContext);
    const { setOpenModalTask, setIndexModalTask, setDetailTask } =
        useContext(ModalContext);
    const handleEdit = (value) => {
        console.log(value);
        setOpenModalTask(true);
        setIndexModalTask(2);
        setDetailTask(value);
    };
    const todoTaskRender = () => {
        return (
            <div className={styles.box}>
                <div className={`${styles.boxHeader} ${styles.todo}`}>
                    <h3>Todo</h3>
                    <div className={`${styles.taskLength} ${styles.todo}`}>
                        {todo?.length}
                    </div>
                </div>
                <div className={styles.boxBody}>
                    {todo.map((item) => (
                        <div
                            className={`${styles.taskWrapper} `}
                            key={item.id}>
                            <div className={styles.taskHeader}>
                                <p>{item.title}</p>
                                <div className={styles.taskIcon}>
                                    <TbEdit
                                        className={styles.icon}
                                        onClick={() => handleEdit(item)}
                                    />
                                    <TbTrashFilled
                                        className={styles.iconTrash}
                                        onClick={() => handleDelete(item.id)}
                                    />
                                </div>
                            </div>

                            <p className={styles.taskDescription}>
                                {item.description}
                            </p>
                            <span
                                className={`${styles.taskStatus} ${styles.todo}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const indevTaskRender = () => {
        return (
            <div className={styles.box}>
                <div className={`${styles.boxHeader} ${styles.indev}`}>
                    <h3>In Dev</h3>
                    <div className={`${styles.taskLength} ${styles.indev}`}>
                        {indev?.length}
                    </div>
                </div>
                <div className={styles.boxBody}>
                    {indev.map((item) => (
                        <div
                            className={`${styles.taskWrapper}`}
                            key={item.id}>
                            <div className={styles.taskHeader}>
                                <p>{item.title}</p>
                                <div className={styles.taskIcon}>
                                    <TbEdit
                                        className={styles.icon}
                                        onClick={() => handleEdit(item)}
                                    />
                                    <TbTrashFilled
                                        className={styles.iconTrash}
                                        onClick={() => handleDelete(item.id)}
                                    />
                                </div>
                            </div>

                            <p className={styles.taskDescription}>
                                {item.description}
                            </p>
                            <span
                                className={`${styles.taskStatus} ${styles.indev}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const doneTaskRender = () => {
        return (
            <div className={styles.box}>
                <div className={`${styles.boxHeader} ${styles.done}`}>
                    <h3>Done</h3>
                    <div className={`${styles.taskLength} ${styles.done}`}>
                        {done?.length}
                    </div>
                </div>
                <div className={styles.boxBody}>
                    {done.map((item) => (
                        <div
                            className={`${styles.taskWrapper} `}
                            key={item.id}>
                            <div className={styles.taskHeader}>
                                <p>{item.title}</p>
                                <div className={styles.taskIcon}>
                                    <TbEdit
                                        className={styles.icon}
                                        onClick={() => handleEdit(item)}
                                    />
                                    <TbTrashFilled
                                        className={styles.iconTrash}
                                        onClick={() => handleDelete(item.id)}
                                    />
                                </div>
                            </div>

                            <p className={styles.taskDescription}>
                                {item.description}
                            </p>
                            <span
                                className={`${styles.taskStatus} ${styles.done}`}>
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    return (
        <div className={styles.boxWrapper}>
            {todoTaskRender()}
            {indevTaskRender()}
            {doneTaskRender()}
        </div>
    );
};

export default BoxTasks;
