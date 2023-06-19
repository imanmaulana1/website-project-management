import React from "react";

import styles from "./MemberAvatar.module.css";
import avatar from "../../assets/avatarDefault.svg";

const MemberAvatar = ({ member, widthAvatar }) => {
    return (
        <div className={styles.members}>
            <img
                src={member.imageUrl === null ? avatar : member.imageUrl}
                alt="member"
                className={styles.member}
                style={{ width: widthAvatar }}
            />
        </div>
    );
};

export default MemberAvatar;
