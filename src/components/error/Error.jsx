import React from "react";
import "./Error.scss";

export default function Error() {
    return(
        <div className="error-page">
            <h2 className="error-h2">Sorry! What you're looking for isn't here!</h2>
            <button className="return-home">Let's go look at patterns!</button>
        </div>
    );
}