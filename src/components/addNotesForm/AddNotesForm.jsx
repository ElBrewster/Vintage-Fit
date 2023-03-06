import React, { useState } from "react";
import "./AddNotesForm.scss";

export default function AddNotes({pattern, addUserComments}) {
    const [addNotes, setAddNotes] = useState(
        {
            userName: "",
            comment: ""
        }
    );

    console.log("Pattern in AddNotesForm: ", pattern, pattern.id)
    function handleChange(event){
        const { name, value } = event.target
        setAddNotes(prevNotes =>(
            {
                ...prevNotes,
                [name]: value
            }
            ));
            console.log("addNotes in handleChange: ", addNotes)
        }
        
        function handleSubmit(event){
            event.preventDefault();
            const newNote = {
                id: Date.now(),
                patternId: pattern.id,
                thumbs: false,
                note: addNotes.comment,
            };

            addUserComments(newNote);
    }

    return(
        <form onSubmit={(event) => handleSubmit(event)} className="add-notes-form">
            <input 
                type="text"
                placeholder="Your Nickname"
                onChange={handleChange}
                name="userName"
                value={addNotes.userName}
            />
            <textarea 
                placeholder="Add your fit comments"
                onChange={handleChange}
                name="comment"
                value={addNotes.comment}
            />
            <button>Add</button>
        </form>
    );
}