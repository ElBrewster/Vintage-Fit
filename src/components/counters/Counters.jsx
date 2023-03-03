import React from 'react';
import "./Counters.scss";
import { VscDiffIgnored } from "react-icons/vsc";
import { MdLabelImportant, MdLabelImportantOutline } from "react-icons/md";


export default function Counters() {
    return (
        <div>
            <MdLabelImportant />
            <MdLabelImportantOutline />
            <p>This is relevant to me.</p>
            <p>good stuff</p>
            <VscDiffIgnored />
            <p>This is immaterial.</p>
        </div>
    )
}