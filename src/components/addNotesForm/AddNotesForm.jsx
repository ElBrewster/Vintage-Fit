import React, { useState } from "react";
import "./AddNotesForm.scss";

export default function AddNotes({addUserComments}) {
    const [addNotes, setAddNotes] = useState(
        {
            userName: "",
            comment: ""
        }
    );

    function handleChange(event){
        const { name, value } = event.target
        setAddNotes(prevNotes =>(
            {
                ...prevNotes,
                [name]: value
            }
            ));
            // console.log("addNotes: ", addNotes)
        }
        
        function handleSubmit(event){
            event.preventDefault();
            //add userId
            //add patternId
            //instead of addNotes, construct a new object to pass in that matches mockData
            addUserComments(addNotes);
        console.log("addNotes: ", addNotes)
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