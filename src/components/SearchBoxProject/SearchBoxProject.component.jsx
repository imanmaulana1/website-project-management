import React, { useContext } from "react";

import { GrSearch } from "react-icons/gr";
import styles from "./SearchBoxProject.module.css";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";

const SearchBoxProject = () => {
    const { setOpenModalProject, setIndexModalProject } =
        useContext(ModalContext);
    const { setSearch } = useContext(SearchContext);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (value) => {
        setSearch(value.search);
        reset();
    };

    return (
        <div className={styles.headerWrap}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        {...register("search")}
                        className={styles.input}
                        placeholder="Search title project..."
                    />
                    <span
                        onClick={handleSubmit(onSubmit)}
                        className={styles.iconWrap}>
                        <GrSearch />
                    </span>
                </div>
            </form>

            <button
                className={styles.btn}
                onClick={() => {
                    setOpenModalProject(true);
                    setIndexModalProject(1);
                }}>
                Create New Project
            </button>
        </div>
    );
};

export default SearchBoxProject;
