import React, { useState } from "react";
import "./Form.scss";

export default function Form(){
    const [fitNotes, setFitnotes] = useState(
        {
            name: "", 
            userName: "", 
            sewingMachine: "", 
            about: "", 
            investment: "",
            keepPrivate: ""
        }
    );

    const displayName = fitNotes.name? <p>{fitNotes.name}</p> : "";
    const displayUsername = fitNotes.userName? <p>{fitNotes.userName}</p> : "";
    const displaySewingMachine = fitNotes.sewingMachine? <p>{fitNotes.sewingMachine}</p> : "";
    const displayAbout = fitNotes.about? <p>{fitNotes.about}</p> : "";
    const displayInvestment = fitNotes.investment? <p>{fitNotes.investment}</p> : "";

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFitnotes(prevFitNotes => ({
                ...prevFitNotes,
                [name]: type === "checkbox" ? checked : value
            }
        ))
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(fitNotes.name)
    }

    return(
        <section className="profileFormContainer">
        <form onSubmit={(event)=>handleSubmit(event)} className="profile-form">
            <input 
                type="text"
                placeholder="Your Nickname"
                onChange={handleChange}
                name="name"
                value={fitNotes.name}
                />
            <input 
                type="text"
                placeholder="Your User Name"
                onChange={handleChange}
                name="userName"
                value={fitNotes.userName}
                />
            <input 
                type="text"
                placeholder="Your Sewing Machine's Nickname"
                onChange={handleChange}
                name="sewingMachine"
                value={fitNotes.sewingMachine}
                />
            <textarea 
                placeholder="Share your sewing bio with the community. You can be detailed or vague, as you prefer."
                name="about"
                onChange={handleChange}
                value={fitNotes.about}
                
                />
            <fieldset className="myFieldset">
                <legend>How much do you sew?</legend>

                <input
                    type="radio"
                    id="full-time" 
                    name="investment"
                    value="full-time"
                    checked={fitNotes.investment === "full-time"}
                    onChange={handleChange}
                    />
                <label htmlFor="full-time">Full Time</label>
                <br />

                <input 
                    type="radio"
                    id="hobbyist"
                    name="investment"
                    value="hobbysit"
                    checked={fitNotes.investment === "hobbyist"}
                    onChange={handleChange}
                    />
                <label htmlFor="hobbyist">Hobbyist</label>
                <br />

                <input 
                    type="radio"
                    id="weekends"
                    name="investment"
                    value="weekends"
                    checked={fitNotes.investment === "weekends"}
                    onChange={handleChange}
                    />
                <label htmlFor="weekends">On Weekends</label>
                <br />
            </fieldset>
            <div className="checkbox">
                <input 
                    type="checkbox"
                    id="keepPrivate"
                    checked={fitNotes.keepPrivate}
                    onChange={handleChange}
                    name="keepPrivate"
                    />
                <label htmlFor="keepPrivate">Keep my information private!</label>
            </div>

            <button>save</button>
        </form>
        <section className="formDetailsDisplay">
            <h3>My Details</h3>
            {displayName}
            {displayUsername}
            {displaySewingMachine}
            {displayAbout}
            {displayInvestment}
        </section>
        </section>
    )
}
