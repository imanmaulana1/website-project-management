import React from "react";
import styles from "./ListMembers.module.css";
import avatar from "../../assets/avatarDefault.svg";

const ListMembers = ({ board }) => {
    return (
        <div className={styles.listWrapper}>
            <h3>List Members</h3>
            {board.appUsers?.map((item) => (
                <div
                    className={styles.list}
                    key={item.id}>
                    <img
                        src={avatar}
                        alt="avatar member"
                        className={styles.avatar}
                    />
                    <div className={styles.userWrapper}>
                        <p>{item.name}</p>
                        <p>{item.username}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListMembers;
