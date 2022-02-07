import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from './Home';
import NotFound from "./NotFound";
import NavBottom from "./NavBottom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";


function Layout() {
    return (
        <>
        <div>
            <NavBottom/>
        </div>
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/education" element={<Education/>}/>
                <Route exact path="/experience" element={<Experience/>}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/skills" element={<Skills/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
        </>
    )
}

export default Layout;