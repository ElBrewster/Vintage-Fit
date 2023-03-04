import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";

export default function Details(){
    const location = useLocation();
    const { from } = location.state;

    return(
        <div className="pattern-box">
            <Pattern key={from.id} pattern={from}/>
            <Counters />
            <PatternNotes />
        </div>
    );
}