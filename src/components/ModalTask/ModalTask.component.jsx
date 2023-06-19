import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";

import styles from "./ModalTask.module.css";

const ModalTask = ({ titleModal, textBtn, createTask, updateTask }) => {
    const { setOpenModalTask, detailTask, indexModalTask } =
        useContext(ModalContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const onSubmit = (data) => {
        if (indexModalTask === 1) {
            createTask(data);
        } else {
            updateTask(detailTask.id, data);
        }
        setOpenModalTask(false);
    };

    useEffect(() => {
        if (indexModalTask === 1) {
            setValue("title", "");
            setValue("description", "");
            setValue("status", "todo");
        } else {
            setValue("title", detailTask.title);
            setValue("description", detailTask.description);
            setValue("status", detailTask.status);
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className={styles.modalBackground}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>{titleModal}</h1>
                    <span onClick={() => setOpenModalTask(false)}>X</span>
                </div>
                <div className={styles.body}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title</label>
                            <input
                                {...register("title", {
                                    required: "This field is required.",
                                })}
                                className={
                                    errors.title
                                        ? `${styles.input} ${styles.error}`
                                        : styles.input
                                }
                            />
                            {errors.title && <p>{errors?.title?.message}</p>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="description">Description</label>
                            <input
                                {...register("description", {
                                    required: "This field is required.",
                                })}
                                className={
                                    errors.description
                                        ? `${styles.input} ${styles.error}`
                                        : styles.input
                                }
                            />
                            {errors.description && (
                                <p>{errors?.description?.message}</p>
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="status">Status</label>
                            <select
                                {...register("status", {
                                    required: "This field is required.",
                                })}
                                className={
                                    errors.status
                                        ? `${styles.input} ${styles.error}`
                                        : styles.input
                                }>
                                <option value="todo">Todo</option>
                                {indexModalTask === 2 && (
                                    <>
                                        <option value="indev">In Dev</option>
                                        <option value="done">Done</option>
                                    </>
                                )}
                            </select>
                            {errors.status && <p>{errors?.status?.message}</p>}
                        </div>
                    </form>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleSubmit(onSubmit)}>{textBtn}</button>
                    <button onClick={() => setOpenModalTask(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalTask;
