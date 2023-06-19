import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./LayoutHome.module.css";
import logo from "../../assets/logo.svg";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";

const LayoutHome = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <div className={styles.siderbarLogo}>
                    <img src={logo} alt="logo" className={styles.logo} />
                </div>
                <div className={styles.sidebarLinks}>
                    <button
                        onClick={() => navigate("/")}
                        className={styles.link}>
                        <RxDashboard />
                        <p>Dashboard</p>
                    </button>
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/login");
                        }}
                        className={styles.link}>
                        <CiLogout />
                        <p>Logout</p>
                    </button>
                </div>
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutHome;
