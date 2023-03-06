import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Form from "../form/Form";
import Pattern from "../pattern/Pattern";

export default function Profile({grabFavs}) {
    // const [favsList, setFavsList] = useState([]);
    // console.log("patternData[0].id", patternData[0].id, "user1.favs", user1.favs, "favsList", favsList)

    // const grabFavs = () => {
    //     const empty = []; 
    //     patternData.forEach(pattern => {
    //         if(user1.favs.includes(pattern.id)){
    //             empty.push(pattern);
    //             console.log(favsList);
    //         }
    //     })
    //     console.log("empty", empty)
    //     setFavsList(empty) 
    // }
    
    // const showFavs = () => {
    //     grabFavs();
    //     return favsList.map(fav => <Pattern key={fav.id} pattern={fav}/>);
    // }
    // const favs = showFavs();
    // const renderFavs = showFavs();
    return(
        <section className="profile-container">
            <h2 className="profile-h2">I love sewing!</h2>
            <div>
            {/* {renderFavs} */}
            </div>
            <Form />
        </section>
    );
}