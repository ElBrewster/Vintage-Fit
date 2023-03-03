import React from "react";
import Counters from "../counters/Counters";
import "./PatternNotes.scss";

export default function PatternNotes() {
    return(
        <div>
            <section>
                <h2>This is static for now ;-;&nbsp;</h2>
                <p>All user's comments on the pattern use</p>
                <p>Accumulated data based on all user's fit notes</p>
            </section>
            <Counters />
        </div>
    )
}