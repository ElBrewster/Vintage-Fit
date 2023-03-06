import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import "./PatternNotes.scss";
import { BsDot } from 'react-icons/bs';
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";

export default function PatternNotes({pattern, grabComment, userComments, setUserComments}) {
    // const [patternComments, setPatternComments] = useState(grabComment(pattern.id));
    console.log("USERCOMMENTS: ", userComments)
    const [thumbsUp, setThumbsUp] = useState(false);
// console.log("{ from } in PatternNotes :", pattern)
//^^ keeping this log here for documentation purposes    
    
    function toggleThumbsUp(pattern, id){
        const foundComment = userComments.find(comment => comment.id === id);
        // console.log('Before: ', foundComment.thumbs);
        // foundComment.thumbs = !foundComment.thumbs
        // console.log('after', foundComment.thumbs)
        console.log("patterncomments", userComments)

        // setThumbsUp(foundComment.thumbs);
        const update = userComments.map(comment => {
            if(comment.id === foundComment.id) {
                console.log("comment: ", comment)
                return { 
                    ...comment,
                    thumbs: !comment.thumbs
                }
            }
            return comment;
        })

        setUserComments(update)
    }

    const filteredComments = userComments.filter(comment => comment.patternId === pattern.id)

    function showComments(){
        const comments = grabComment(pattern.id);
            const mappedComments = filteredComments.map(comment => {
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
            return mappedComments;
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

PatternNotes.propType = {
    pattern: PropTypes.object,
    grabComment: PropTypes.func,
    userComments: PropTypes.func,
    setUserComments: PropTypes.func
}