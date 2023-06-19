import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

import FormLogin from "../../components/FormLogin/FormLogin.component";
import { handleLogin } from "./Login.handler";

import styles from "./Login.module.css";


const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (value) => {
        toast.promise(
            handleLogin(value).then((res) => {
                reset();
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }),
            {
                loading: "loading...",
                success: "Successfully login",
                error: "Username does not exist or the password is incorrect.",
            },
            {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            }
        );
    };

    return (
        <>
            <Toaster />
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <h1>Hello Again!</h1>
                    <p>Welcome back you've been missed.</p>
                </div>
                <FormLogin
                    register={register}
                    errors={errors}
                    onSubmit={onSubmit}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    );
};

export default Login;
