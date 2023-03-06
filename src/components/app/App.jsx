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
  console.log("userComments: ", comments[0].note);

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
        // console.log("checkId: ", checkId)
        return checkId;
      }
    //match pattern id to commentData's pattern id
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
        <Route path="/details/:id" element={<Details grabComment={grabComment} addUserComments={addUserComments}/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/your-fit-notes" element={<FitNotes/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
