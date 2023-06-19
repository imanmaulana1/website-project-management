import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaLock, FaEnvelope, FaAt } from "react-icons/fa";
import styles from "./FormRegister.module.css";

const FormRegister = ({ register, handleSubmit, onSubmit, errors }) => {
    const navigate = useNavigate();

    const inputName = useRef();
    const inputUsername = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    const handleFocus = (e) => {
        if (e.target.name === "name") {
            inputName.current.style.border = "1px solid #1c91f4";
        } else if (e.target.name === "username") {
            inputUsername.current.style.border = "1px solid #1c91f4";
        } else if (e.target.name === "email") {
            inputEmail.current.style.border = "1px solid #1c91f4";
        } else if (e.target.name === "password") {
            inputPassword.current.style.border = "1px solid #1c91f4";
        }
    };

    const handleBlur = (e) => {
        if (e.target.name === "name") {
            inputName.current.style.border = "none";
        } else if (e.target.name === "username") {
            inputUsername.current.style.border = "none";
        } else if (e.target.name === "email") {
            inputEmail.current.style.border = "none";
        } else if (e.target.name === "password") {
            inputPassword.current.style.border = "none";
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formWrapper}>
            <div
                ref={inputName}
                className={
                    errors.name
                        ? `${styles.formGroup} ${styles.error}`
                        : styles.formGroup
                }>
                <input
                    {...register("name", {
                        required: "This field is required",
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Fullname"
                    className={styles.input}
                />
                <div className={styles.icon}>
                    <FaAt />
                </div>
            </div>
            {errors.name && (
                <p className={styles.errorMsg}>{errors.name.message}</p>
            )}
            <div
                ref={inputUsername}
                className={
                    errors.username
                        ? `${styles.formGroup} ${styles.error}`
                        : styles.formGroup
                }>
                <input
                    {...register("username", {
                        required: "This field is required",
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Username"
                    className={styles.input}
                />
                <div className={styles.icon}>
                    <FaUser />
                </div>
            </div>
            {errors.username && (
                <p className={styles.errorMsg}>{errors.username.message}</p>
            )}
            <div
                ref={inputEmail}
                className={
                    errors.email
                        ? `${styles.formGroup} ${styles.error}`
                        : styles.formGroup
                }>
                <input
                    {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email is invalid",
                        },
                    })}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={styles.input}
                />
                <div className={styles.icon}>
                    <FaEnvelope />
                </div>
            </div>
            {errors.email && (
                <p className={styles.errorMsg}>{errors.email.message}</p>
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
                    Already a member?
                    <span onClick={() => navigate("/login")}>&nbsp;Log In</span>
                </p>
                <button type="submit">Register</button>
            </div>
        </form>
    );
};

export default FormRegister;
