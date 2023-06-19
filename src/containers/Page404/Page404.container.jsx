import React from "react";
import styles from "./Page404.module.css";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.text}>
            <p>
              <span>
                404
                <br />
              </span>
              Page not found
            </p>
          </div>
          <button onClick={() => navigate("/")}>Back to Homepage</button>
        </div>
      </div>
    </>
  );
};

export default Page404;
