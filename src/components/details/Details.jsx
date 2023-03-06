import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";
import AddNotesForm from "../addNotesForm/AddNotesForm";

export default function Details({grabComment, addUserComments}){
    const [userLiked, setUserLiked] = useState([]);
    const [userFlagged, setUserFlagged] = useState([]);
    const [currentPatternId, setCurrentPatternId] = useState();

    const location = useLocation();
    const { from } = location.state;
    console.log("location.state:", location.state)
    const grabPatternId = () => {
        setCurrentPatternId(prevState => prevState = from.id);
    }

    // console.log("set from.id: ", from.id, "currentPattern: ", currentPatternId)
//----
    function addToLikes(patternNum){
        grabPatternId();
        setUserLiked(prevState => {
            return [...prevState, patternNum];
        })
    }
    // console.log("userLiked: ", userLiked)
    // console.log("from.id: ", from.id)
    // console.log("currentPatternId: ", currentPatternId)
    //^^this function will add a like, but how do we remove a like based on the click?
    function removeLike(patternNum){
        setUserLiked(prevState => {
            if(prevState.includes(patternNum)){
                const newState = prevState.filter(e => !e === patternNum);
                return newState;
            }
        })
    }
    // console.log("userliked: ", userLiked)
//---
    // function checkForComments(currentPatternId){
    //     grabComment(currentPatternId);
    // }

    return(
        <div className="pattern-box">
            <Pattern key={from.id} pattern={from}/>
            <Counters addToLikes={addToLikes} currentPatternId={currentPatternId} />
            <div className="notes-box">
                <PatternNotes pattern={from} grabComment={grabComment} />
                <AddNotesForm addUserComments={addUserComments}/>
            </div>
        </div>
    );
}