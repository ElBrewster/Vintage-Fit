import React from "react";
import "./Header.scss";
import { GiSquirrel } from "react-icons/gi"

export default function Header() {
    return(
        <header className="my-header">
            <GiSquirrel className="squirrel"/>
            <h1>&nbsp;Vintage Fit</h1>
        </header>
    );
}