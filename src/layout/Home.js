import React from "react";
import {Link} from "react-router-dom"
import "./Home.css";

export default function Home() {
    return (
        <div className="homemain">
            <h1>Home</h1>

            <Link to="/about"><h4 className= "links">About</h4></Link>

            <Link to="/skills"><h4 className= "links">Skills</h4></Link>

            <Link to="/education"><h4 className= "links">Education</h4></Link>

            <Link to="/experience"><h4 className= "links"> Experience</h4></Link>
            
            <Link to="/projects"><h4 className= "links">Projects</h4></Link>

            <Link to="/contact"><h4 className= "links">Contact</h4></Link>
        </div>
    )
}
