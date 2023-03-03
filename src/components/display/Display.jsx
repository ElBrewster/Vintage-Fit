import React, { useEffect, useState } from "react";
import "./Display.scss";
import Pattern from "../pattern/Pattern";
// import patterns from "../../mockData/data"
export default function Display() {
    const [patternData, setPatternData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5500/patterns")
        .then(res => res.json())
        // .then(res => console.log(res));
        .then(data => setPatternData(data.patterns))
    }, []);


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