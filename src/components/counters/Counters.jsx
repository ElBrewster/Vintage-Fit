import React, { useState } from 'react';
import "./Counters.scss";
import { MdLabelImportant, MdLabelImportantOutline, MdFavoriteBorder, MdFavorite} from "react-icons/md";

export default function Counters() {
    const [heartClick, setHeartClick] = useState({isClicked: false});
    const [flagClick, setFlagClick] = useState({isClicked: false});

    function toggleFlag(){
        setFlagClick(prevState => !prevState)
        console.log("flagClick: ", flagClick)
    }

    function toggleHeart(){
        setHeartClick(prevState => !prevState)
        console.log("heartClick: ", heartClick)

    }

    const flagIcon = flagClick ? <MdLabelImportant /> : <MdLabelImportantOutline />
    const flagIconText = flagClick ? `Helpful.` : `This is immaterial.`;
    const heartIcon = heartClick ? <MdFavorite /> : <MdFavoriteBorder />;
    const heartIconText = flagClick ? `I want to make this.` : `Probably won't try it.`

    return (
        <div className="counters-dash">
            <div className="flag">
                <button onClick={toggleFlag} className="flagButton" alt="flag icon">
                    {flagIcon}
                </button>
                {flagIconText}
            </div>
            <div className="heart">
                <button onClick={toggleHeart} className="heartButton" alt="heart icon">
                    {heartIcon}
                </button>
                {heartIconText}
            </div>
        </div>
    )
}