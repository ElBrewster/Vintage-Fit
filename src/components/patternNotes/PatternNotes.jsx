import React, { useState } from "react";
import "./PatternNotes.scss";
import { BsDot } from 'react-icons/bs';
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";

export default function PatternNotes({pattern, grabComment, userComments, setUserComments}) {
    const [thumbsUp, setThumbsUp] = useState(false);
console.log("userComments", userComments)
    // console.log("{ from } in PatternNotes :", pattern)
//^^ keeping this log here for documentation purposes    
    
    function toggleThumbsUp(pattern, id){
        const comments = grabComment(pattern.id);
        // console.log("comments", comments)
        const foundComment = userComments.find(comment => comment.id === id);
        // console.log("foundComment", foundComment)
        foundComment.thumbs = !foundComment.thumbs
        setThumbsUp(foundComment.thumbs)
    }

    function showComments(){
        const comments = grabComment(pattern.id);
        console.log('comments', comments)
        // if(comments.thumbs){
            //split first


            const mappedComments = comments.map(comment => {
                    if(comment.thumbs){
                        return (
                            <article key={comment.id}>
                                <button onClick={() => toggleThumbsUp(pattern.id, comment.id)} className="thumbsUp" alt="thumbs up icon">
                                    <RiThumbUpFill />
                                </button>
                                <p>Helpful!</p>
                                <p><BsDot /> &nbsp;{comment.note}</p>
                            </article>
                            );
                    } else {
                        return (
                        <article key={comment.id}>
                            <button onClick={() => toggleThumbsUp(pattern.id, comment.id)} className="thumbsDown" alt="thumbs down icon">
                                <RiThumbUpLine />
                            </button>
                            <p><BsDot /> &nbsp;{comment.note}</p>
                        </article>
                        );
                    }
                })
                console.log("mappedComments", mappedComments)
                return mappedComments;
            // }
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
    );
}