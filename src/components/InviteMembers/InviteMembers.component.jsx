import React from "react";
import { GrSearch } from "react-icons/gr";
import styles from "./InviteMembers.module.css";
import { useForm } from "react-hook-form";

const InviteMembers = ({getUser}) => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (value) => {
        getUser(value.search)
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inviteBox}>
                <input
                    type="text"
                    {...register("search")}
                    className={styles.input}
                    placeholder="Invite members by username"
                />
                <span
                    onClick={handleSubmit(onSubmit)}
                    className={styles.iconWrap}>
                    <GrSearch />
                </span>
            </div>
        </form>
    );
};

export default InviteMembers;
