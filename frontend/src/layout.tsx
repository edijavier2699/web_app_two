import React from "react";

import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Layout = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<App/>} path="/"/>
                </Routes>
            </BrowserRouter>    
        </div>
    )
}

export default Layout;