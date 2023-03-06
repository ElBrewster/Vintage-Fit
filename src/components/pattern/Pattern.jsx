import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import "./Pattern.scss";

export default function Pattern({pattern}) {
console.log('pattern', pattern)
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

Pattern.propType = {
    pattern: PropTypes.object
}