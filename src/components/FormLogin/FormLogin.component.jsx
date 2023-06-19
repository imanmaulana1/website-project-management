import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

import styles from "./FormLogin.module.css";

const FormLogin = ({ register, handleSubmit, onSubmit, errors }) => {
    const navigate = useNavigate();

    const inputPassword = useRef();
    const inputUsernameOrEmail = useRef();

    const handleFocus = (e) => {
        if (e.target.name === "usernameOrEmail") {
            inputUsernameOrEmail.current.style.border = "1px solid #1c91f4";
        } else if (e.target.name === "password") {
            inputPassword.current.style.border = "1px solid #1c91f4";
        }
    };

    const handleBlur = (e) => {
        if (e.target.name === "usernameOrEmail") {
            inputUsernameOrEmail.current.style.border = "none";
        } else if (e.target.name === "password") {
            inputPassword.current.style.border = "none";
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formWrapper}>
            <div
                ref={inputUsernameOrEmail}
                className={
                    errors.usernameOrEmail
                        ? `${styles.formGroup} ${styles.error}`
                        : styles.formGroup
                }>
                <input
                    {...register("usernameOrEmail", {
                        required: "This field is required",
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Username / Email"
                    className={styles.input}
                />
                <div className={styles.icon}>
                    <FaUser />
                </div>
            </div>
            {errors.usernameOrEmail && (
                <p className={styles.errorMsg}>
                    {errors.usernameOrEmail.message}
                </p>
            )}
            <div
                ref={inputPassword}
                className={
                    errors.password
                        ? `${styles.formGroup} ${styles.error}`
                        : styles.formGroup
                }>
                <input
                    type="password"
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Min length 6 character",
                        },
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Password"
                    className={styles.input}
                />
                <div className={styles.icon}>
                    <FaLock />
                </div>
            </div>
            {errors.password && (
                <p className={styles.errorMsg}>{errors.password.message}</p>
            )}
            <div className={styles.footerContent}>
                <p>
                    Not a member?{" "}
                    <span onClick={() => navigate("/register")}>
                        Register now
                    </span>
                </p>
                <button>Login</button>
            </div>
        </form>
    );
};

export default FormLogin;
