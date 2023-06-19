import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./LayoutAuth.module.css";
import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.svg";

const LayoutAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <img src={logo} alt="logo" className={styles.logo} />
            </nav>
            <div className={styles.contentWrapper}>
                <div className={styles.hero}>
                    <h1>
                        <span>Manage your projects </span>using our platform
                    </h1>
                    <img src={hero} alt="cover" className={styles.cover} />
                </div>
                <div className={styles.form}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default LayoutAuth;
