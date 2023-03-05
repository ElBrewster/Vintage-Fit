import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";
import AddNotes from "../addForm/AddNotes";

export default function Details(){
    const [userLiked, setUserLiked] = useState([]);
    const [userFlagged, setUserFlagged] = useState([]);
//everything has to be turned into a string, or do that in the post?
    const [currentPatternId, setCurrentPatternId] = useState();

    const location = useLocation();
    const { from } = location.state;
    console.log("location.state:", location.state)
    const getPatternId = () => {
        setCurrentPatternId(prevState => prevState = from.id);
    }

    console.log("set from.id: ", from.id, "currentPattern: ", currentPatternId)

    function addToLikes(patternNum){
        getPatternId();
        setUserLiked(prevState => {
            return [...prevState, patternNum];
        })
    }

    console.log("userLiked: ", userLiked)
    console.log("from.id: ", from.id)
    console.log("currentPatternId: ", currentPatternId)
    //^^this function will add a like, but how do we remove a like based on the click?
    function removeLike(patternNum){
        setUserLiked(prevState => {
            if(prevState.includes(patternNum)){
                const newState = prevState.filter(e => !e === patternNum);
                return newState;
            }
        })
    }

    console.log("userliked: ", userLiked)
    return(
        <div className="pattern-box">
            <Pattern key={from.id} pattern={from}/>
            <Counters addToLikes={addToLikes} currentPatternId={currentPatternId} />
            <div className="notes-box">
                <PatternNotes />
                <AddNotes />
            </div>
        </div>
    );
}