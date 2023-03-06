import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";
import AddNotesForm from "../addNotesForm/AddNotesForm";

export default function Details({grabComment, addUserComments, setUser1}){
    const [userLiked, setUserLiked] = useState([]);
    const [userFlagged, setUserFlagged] = useState([]);
    const [currentPatternId, setCurrentPatternId] = useState();

    const location = useLocation();
    const { from } = location.state;
    console.log("location.state:", location.state)
//^keeping this console.log for understanding and documentation^

    const grabPatternId = () => {
        setCurrentPatternId(prevState => prevState = from.id);
    }

    function addToLikes(patternNum){
        grabPatternId();
        setUserLiked(prevState => {
            return [...prevState, patternNum];
        })
        console.log("userliked:", userLiked)
    }

    function removeLike(patternNum){
        setUserLiked(prevState => {
            if(prevState.includes(patternNum)){
                const newState = prevState.filter(e => !e === patternNum);
                return newState;
            }
        })
    }

    return(
        <div className="pattern-box">
            <Pattern key={from.id} pattern={from}/>
            <div className="notes-box">
                <PatternNotes pattern={from} grabComment={grabComment} />
                <Counters addToLikes={addToLikes} currentPatternId={currentPatternId} />
                <AddNotesForm pattern={from} addUserComments={addUserComments} setUser1={setUser1}/>
            </div>
        </div>
    );
}