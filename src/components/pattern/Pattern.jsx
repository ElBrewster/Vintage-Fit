import React from "react";
import { Link } from "react-router-dom";
import "./Pattern.scss";

export default function Pattern({pattern}) {

    return(
        <section className="portraits">
            <p className="portrait-heading">{pattern.name}</p>
            <img src={pattern.url} alt={pattern.alt} className="pattern-pic"></img>
            <Link to={`/details/${pattern.id}`} state={{from: pattern}}>
                <button className="portrait-button" >Community Notes</button>
            </Link>
        </section>
    );
}