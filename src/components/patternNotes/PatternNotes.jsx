import React from "react";
import "./PatternNotes.scss";
import { BsDot } from 'react-icons/bs';

export default function PatternNotes({pattern, grabComment}) {

    // console.log("{ from } in PatternNotes :", pattern)
//^^ keeping this log here for documentation purposes    
    function showComments(){
        const comments = grabComment(pattern.id);
        if(comments){
            return comments.map(comment => <p key={comment.id}><BsDot /> &nbsp;{comment.note}</p>)
        }
    }
    
    return(
        <div className="right-info">
            <section>
                <h2>Pattern Notes From Our Sewers&nbsp;</h2>
                <div className="show-me-comments">
                    {showComments()}
                </div>
                <p><span className="span-notes">We are cataloguing the accumulated data of all user's fit notes.
                    </span></p>
            </section>
        </div>
    )
}