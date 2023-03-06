import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav(){
    return(
        <nav className="navigator-bar">
            <ul className="browse-nav"><Link to="/">Browse</Link></ul>
            <ul className="profile-nav"><Link to="/profile">My Page</Link></ul>
            <ul className="your-fit-notes-nav"><Link to="/your-fit-notes">Fit Notes</Link></ul>
        </nav>
    );
}