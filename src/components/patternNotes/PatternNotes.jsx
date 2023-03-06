import React from "react";
import "./PatternNotes.scss";

export default function PatternNotes({pattern, grabComment}) {

    console.log("from in PatternNotes :", pattern)
//^^ keeping this log here for documentation purposes    
    function showComments(){
        const comments = grabComment(pattern.id);
        if(comments){
            return comments.map(comment => <p key={comment.id}>{comment.note}</p>)
        }
        console.log("comments: ", comments);
    }
    return(
        <div className="right-info">
            <section>
                <h2>This is static for now ;-;&nbsp;</h2>
                <div className="show-me-comments">
                    {showComments()}
                </div>
                <p>All user's comments on the pattern use go here. </p>
                <p>We are cataloguing the accumulated data of all user's fit notes.</p>
            </section>
        </div>
    )
}