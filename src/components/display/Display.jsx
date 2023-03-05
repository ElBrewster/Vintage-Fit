import React, { useEffect, useState } from "react";
import "./Display.scss";
import Pattern from "../pattern/Pattern";
// import patterns from "../../mockData/data"

export default function Display({patternData}) {

    const patternPortraits = () => {
        return patternData.map(pattern => {
            return (
                <Pattern key={pattern.id} pattern={pattern}/>
            );
        });
    };

    return(
        <section className="pattern-browser-container">
            {patternPortraits()}
        </section>
    );
}