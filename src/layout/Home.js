import React from "react";
import {Link} from "react-router-dom"
import "./Home.css";

export default function Home() {



    return (
        <div className="homemain">

            <div>
            <Link to="/about" className="link"><h4 className= "links">About</h4></Link>

            <Link to="/skills" className="link"><h4 className= "links">Skills</h4></Link>

            <Link to="/education" className="link"><h4 className= "links">Education</h4></Link>

            <Link to="/experience" className="link"><h4 className= "links"> Experience</h4></Link>
            
            <Link to="/projects" className="link"><h4 className= "links">Projects</h4></Link>

            <Link to="/contact" className="link"><h4 className= "links">Contact</h4></Link>
            </div>
        </div>
    )
}
