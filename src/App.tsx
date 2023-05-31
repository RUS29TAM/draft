import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout";
import Blogs from "./Pages/Blogs";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Next from "./Pages/Next";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs/>} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="todos" element={<Next />} />
                </Route>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
