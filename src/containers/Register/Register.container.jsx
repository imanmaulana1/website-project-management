import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

import FormRegister from "../../components/FormRegister/FormRegister.component";
import { handleRegister } from "./Register.handler";

import styles from "./Register.module.css";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (value) => {
        toast.promise(
            handleRegister(value).then((res) => {
                reset();
            }),
            {
                loading: "Loading...",
                success: "Registration Success",
                error: (err) => err.message,
            },
            {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            }
        );
        // try {
        //     await handleRegister(value);
        //     toast.success("Successfully registered!", {
        //         style: {
        //             borderRadius: "10px",
        //             background: "#333",
        //             color: "#fff",
        //         },
        //     });
        //     reset();
        // } catch (error) {
        //     toast.error(error.message, {
        //         style: {
        //             borderRadius: "10px",
        //             background: "#333",
        //             color: "#fff",
        //         },
        //     });
        // }
    };

    return (
        <>
            <Toaster />
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <p>Start for free.</p>
                    <h1>
                        Create new account<span>.</span>
                    </h1>
                </div>
                <FormRegister
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    );
};

export default Register;
