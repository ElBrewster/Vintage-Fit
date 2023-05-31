import React from "react";
import "./FitNotes.scss";

export default function FitNotes({userComments}) {
    const showComments = userComments.map(note => (
        <div>
            <p>&#8226;&nbsp;&nbsp;{note.note}</p>
            <hr />
        </div>
    ));
    console.log("userComments:", userComments[0].id)


    return(
        <div className="fit-notes-view">
            <section className="noteContainer">
                <h2 className="fit-notes-view-h2">Here are the fit notes you have shared with the community.</h2>
                <div className="pContainer">
                    {showComments}
                </div>
            </section>
        </div>
    );
}