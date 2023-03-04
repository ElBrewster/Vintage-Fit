import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
    return(
        <div className="error-page">
            <h2 className="error-h2">Sorry! What you're looking for isn't here!</h2>
            <Link to="/">
                <button className="return-home">Let's go look at patterns!</button>
            </Link>
        </div>
    );
}