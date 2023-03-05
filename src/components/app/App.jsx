import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from "../nav/Nav";
import Header from '../header/Header';
import Display from '../display/display';
import Details from '../details/Details';
import Profile from '../profile/Profile';
import FitNotes from '../fitNotes/FitNotes';
import Error from '../error/Error';


export default function App() {
  const [patternData, setPatternData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/patterns")
    .then(res => res.json())
    // .then(res => console.log(res));
    .then(data => setPatternData(data.patterns))
}, []);

  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Display patternData={patternData}/>} exact></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/your-fit-notes" element={<FitNotes/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
