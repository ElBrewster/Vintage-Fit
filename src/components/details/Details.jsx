import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Details.scss";
import Pattern from "../pattern/Pattern";
import Counters from "../counters/Counters";
import PatternNotes from "../patternNotes/PatternNotes";
import AddNotesForm from "../addNotesForm/AddNotesForm";

export default function Details({grabComment, addUserComments, userComments, setUserComments}){
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
                <PatternNotes pattern={from} grabComment={grabComment} userComments={userComments} setUserComments={setUserComments}/>
                <Counters addToLikes={addToLikes} currentPatternId={currentPatternId} />
                <AddNotesForm pattern={from} addUserComments={addUserComments}/>
            </div>
        </div>
    );
}

Details.propTypes = {
    grabComment: PropTypes.func,
    addUserComments: PropTypes.func,
    userComments: PropTypes.func,
    setUserComments: PropTypes.func
}