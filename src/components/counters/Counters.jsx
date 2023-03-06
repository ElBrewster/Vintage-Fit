import React, { useState } from 'react';
import PropTypes from 'prop-types'
import "./Counters.scss";
import { MdLabelImportant, MdLabelImportantOutline, MdFavoriteBorder, MdFavorite} from "react-icons/md";

export default function Counters({addToLikes, currentPatternId}) {
    const [heartClick, setHeartClick] = useState(false);
    // const [flagClick, setFlagClick] = useState(false);

    // function toggleFlag(){
    //     setFlagClick(prevState => !prevState)
    // }

    function toggleHeart(){
        setHeartClick(prevState => !prevState)
        if(heartClick){
            addToLikes(currentPatternId);
        }
    }

    // const flagIcon = flagClick ? <MdLabelImportant /> : <MdLabelImportantOutline />
    // const flagIconText = flagClick ? `Helpful.` : `This is immaterial.`;
    const heartIcon = heartClick ? <MdFavorite /> : <MdFavoriteBorder />;
    const heartIconText = heartClick ? `I want to make this.` : ""

    return (
        <div className="counters-dash">
            <div className="heart">
                <button onClick={toggleHeart} className="heartButton" alt="heart icon">
                    {heartIcon}
                </button>
                {heartIconText}
            </div>
            {/* <div className="flag">
                {flagIconText}
                <button onClick={toggleFlag} className="flagButton" alt="flag icon">
                    {flagIcon}
                </button>
            </div> */}
        </div>
    )
}

Counters.propTypes = {
    addToLikes: PropTypes.func,
    currentPatternId: PropTypes.func
}