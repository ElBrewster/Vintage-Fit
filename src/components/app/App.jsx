import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from "../nav/Nav";
import Header from '../header/Header';
import Display from '../display/Display';
import Details from '../details/Details';
import Profile from '../profile/Profile';
import FitNotes from '../fitNotes/FitNotes';
import Error from '../error/Error';
import comments from "../../mockData/userCommentsData";


export default function App() {
  const [patternData, setPatternData] = useState([]);
  const [userComments, setUserComments] = useState(comments);
  const [user1, setUser1] = useState({
                                      "id":"1", 
                                      "name": "Jane Joe", 
                                      "theirNotes": ["1", "2"],
                                      "favs": ["1", "3", "6"]
                                    });
  const [favsList, setFavsList] = useState([]);


  function addUserComments(addComment){
      setUserComments(prevComments => {
        return [...userComments, addComment];
      })
  }

  function grabComment(patternDataId) {
      const checkId = userComments.filter(comment => comment.patternId === patternDataId);
      if(!checkId.length){
        return;
      } else {
        return checkId;
      }
  }

  const grabFavs = () => {
    const empty = []; 
    patternData.forEach(pattern => {
        if(user1.favs.includes(pattern.id)){
            empty.push(pattern);
            console.log(favsList);
        }
    })
    setFavsList(empty) 
}

  useEffect(() => {
    // fetch("http://localhost:5500/patterns")
    fetch("https://api-patterns-for-ash.vercel.app/patterns")
    .then(res => res.json())
    // .then(res => console.log(res));
    .then(data => setPatternData(data.patterns))
  }, []);
//I've kept these fetch calls in the same place for Express server deployment clarity, and in case the server is being run locally

  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Display patternData={patternData}/>} exact></Route>
        <Route path="/details/:id" element={<Details grabComment={grabComment} addUserComments={addUserComments} userComments={userComments} setUserComments={setUserComments}/>}></Route>
        <Route path="/profile" element={<Profile grabFavs={grabFavs}/>}></Route>
        <Route path="/your-fit-notes" element={<FitNotes userComments={userComments}/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
