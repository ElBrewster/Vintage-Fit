import React from "react";
import "./FitNotes.scss";

export default function FitNotes({userComments}) {
    const showComments = () => userComments.theirNotes.map(note => <p>{userComments.note}</p>)
    console.log("userComments:", userComments)


    return(
        <div className="fit-notes-view">
            <h2 className="fit-notes-view-h2">Here are the fit notes youve shared with the community.</h2>
            {/* {() => showComments()} */}

        </div>
    );
}