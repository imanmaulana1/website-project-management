import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../contexts/ModalContext";

import MemberAvatar from "../MemberAvatar/MemberAvatar.component";

import { BsThreeDots } from "react-icons/bs";
import styles from "./CardProject.module.css";

const CardProject = ({ item, deleteBoards }) => {
    const { setOpenModalProject, setIndexModalProject, setDetailProject } =
        useContext(ModalContext);
    const [showDots, setShowDots] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (item) => {
        setIndexModalProject(2);
        setOpenModalProject(true);
        setDetailProject(item);
        setShowDots(false);
    };

    const handleDelete = (id) => {
        deleteBoards(id);
        setShowDots(false);
    };

    return (
        <>
            <div className={styles.project}>
                <div className={styles.projectHeader}>
                    <p onClick={() => navigate(`/projects/${item.id}/board`)}>
                        {item.title}
                    </p>
                    <BsThreeDots
                        className={styles.projectDots}
                        onClick={() => setShowDots(!showDots)}
                    />
                </div>
                <div
                    className={styles.projectProgress}
                    onClick={() => navigate(`/projects/${item.id}/board`)}>
                    <div className={styles.projectText}>
                        <p className={styles.tasks}>
                            Tasks: {item.tasks?.length}
                        </p>
                        <p className={styles.tasks}>50%</p>
                    </div>
                    <div className={styles.progressWrap}>
                        <div className={styles.progress}></div>
                    </div>
                </div>
                <div
                    className={styles.projectMembers}
                    onClick={() => navigate(`/projects/${item.id}/board`)}>
                    <p>Members:</p>
                    <div className={styles.membersWrap}>
                        {item.appUsers?.map((x) => (
                            <MemberAvatar
                                member={x}
                                key={x.id}
                                widthAvatar="30px"
                            />
                        ))}
                    </div>
                </div>
                {showDots && (
                    <ul className={`${styles.dropDownMenu} ${styles.down}`}>
                        <li>
                            <span
                                onClick={() =>
                                    navigate(`/projects/${item.id}/board`)
                                }>
                                Detail
                            </span>
                        </li>
                        <li>
                            <span onClick={() => handleEdit(item)}>Edit</span>
                        </li>
                        <li>
                            <span onClick={() => handleDelete(item.id)}>
                                Delete
                            </span>
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default CardProject;
