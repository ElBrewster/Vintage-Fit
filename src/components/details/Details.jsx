import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";

export default function Details(){
    const [userLiked, setUserLiked] = useState([]);
    const [userFlagged, setUserFlagged] = useState([]);

    const location = useLocation();
    const { from } = location.state;

    function trackLikes(patternNum){
        setUserLiked(prevState => {
            return [...prevState, patternNum]
        })
    }
    
    return(
        <div className="pattern-box">
            <Pattern key={from.id} pattern={from}/>
            <Counters />
            <PatternNotes />
        </div>
    );
}