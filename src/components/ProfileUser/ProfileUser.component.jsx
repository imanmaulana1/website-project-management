import React, { useState } from "react";
import Calendar from "react-calendar";

import styles from "./ProfileUser.module.css";
import avatarDefault from "../../assets/avatarDefault.svg";

const ProfileUser = ({ user, boards }) => {
    const [date, setDate] = useState(new Date());
    return (
        <section className={styles.profileWrap}>
            <div className={styles.profile}>
                <p className={styles.textUsername}>Hello, {user.name}</p>
                <img
                    src={avatarDefault}
                    alt="avatar"
                    className={styles.avatar}
                />
                <button className={styles.btn}>Upload Image</button>
            </div>
            <div className={styles.project}>
                <Calendar
                    onChange={setDate}
                    value={date}
                />
            </div>
        </section>
    );
};

export default ProfileUser;
