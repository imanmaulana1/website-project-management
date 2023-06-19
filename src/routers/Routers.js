import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import BoardProjects from "../containers/BoardProjects/BoardProjects.component";
// import DetailBoard from "../containers/DetailBoardProject/DetailBoard.container";
import Login from "../containers/Login/Login.container";

import Page404 from "../containers/Page404/Page404.container";
import Register from "../containers/Register/Register.container";
import LayoutAuth from "../layouts/LayoutAuth/LayoutAuth.container";
import LayoutHome from "../layouts/LayoutHome/LayoutHome.container";
import BoardProjects from "../containers/BoardProjects/BoardProjects.component";
import DetailBoard from "../containers/DetailBoardProject/DetailBoard.container";
import { ModalProvider } from "../contexts/ModalContext";
import { SearchProvider } from "../contexts/SearchContext";
import { TaskProvider } from "../contexts/TaskContext";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutAuth />}>
                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        element={<Register />}
                    />
                </Route>
                <Route
                    element={
                        <ModalProvider>
                            <TaskProvider>
                                <SearchProvider>
                                    <LayoutHome />
                                </SearchProvider>
                            </TaskProvider>
                        </ModalProvider>
                    }>
                    <Route
                        path="/"
                        element={<BoardProjects />}
                    />
                    <Route
                        path="/projects/:idProject/board"
                        element={<DetailBoard />}
                    />
                </Route>
                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
