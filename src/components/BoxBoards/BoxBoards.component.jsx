import React from "react";

import CardProject from "../CardProject/CardProject.component";

import styles from "./BoxBoards.module.css";

const BoxBoards = ({ boards, deleteBoards }) => {
    return (
        <section
            className={
                boards.length < 1
                    ? styles.boardWrap
                    : `${styles.boardWrap} ${styles.active}`
            }>
            <h1>Project Boards</h1>
            {boards.length < 1 ? (
                <div className={styles.boxContainer}>
                    <p>
                        You dont have any projects that you&lsquo;re working on
                    </p>
                </div>
            ) : (
                <div className={styles.boxGrid}>
                    {boards.map((item) => (
                        <CardProject
                            key={item.id}
                            item={item}
                            deleteBoards={deleteBoards}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default BoxBoards;
