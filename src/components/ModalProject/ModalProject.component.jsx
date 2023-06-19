import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ModalContext } from "../../contexts/ModalContext";

import styles from "./ModalProject.module.css";

const ModalProject = ({ titleModal, textBtn, createBoards, putBoards }) => {
    const { setOpenModalProject, indexModalProject, detailProject } =
        useContext(ModalContext);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (indexModalProject === 1) {
            createBoards(data);
        } else {
            putBoards(data, detailProject.id);
        }
        setOpenModalProject(false);
    };

    useEffect(() => {
        if (indexModalProject === 2) {
            setValue("title", detailProject.title);
        } else {
            setValue("title", "");
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.modalBackground}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>{titleModal}</h1>
                    <span onClick={() => setOpenModalProject(false)}>X</span>
                </div>
                <div className={styles.body}>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            placeholder="Title project"
                        />
                        {errors.title && <p>{errors?.title?.message}</p>}
                    </form>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleSubmit(onSubmit)}>{textBtn}</button>
                    <button onClick={() => setOpenModalProject(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalProject;
