import React, { createContext, useState } from "react";

export const ModalContext = createContext(null);
export const ModalProvider = ({ children }) => {
    const [openModalProject, setOpenModalProject] = useState(false);
    const [indexModalProject, setIndexModalProject] = useState(1);
    const [detailProject, setDetailProject] = useState({});
    const [openModalTask, setOpenModalTask] = useState(false);
    const [indexModalTask, setIndexModalTask] = useState(1);
    const [detailTask, setDetailTask] = useState({});
    return (
        <ModalContext.Provider
            value={{
                openModalProject,
                setOpenModalProject,
                indexModalProject,
                setIndexModalProject,
                detailProject,
                setDetailProject,
                openModalTask,
                setOpenModalTask,
                indexModalTask,
                setIndexModalTask,
                detailTask,
                setDetailTask,
            }}>
            {children}
        </ModalContext.Provider>
    );
};
