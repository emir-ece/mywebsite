import React from "react"

import { BrowserRouter, Routes, Route } from "react-router"

import MainPage from "./pages/Main"
import ResumePage from "./pages/Resume"

import "./styles.scss"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} Component={MainPage} />
                <Route path={"/resume"} Component={ResumePage} />
            </Routes>
        </BrowserRouter>
    )
}

export default App