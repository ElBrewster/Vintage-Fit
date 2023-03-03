import {Route, Routes } from "react-router-dom";
import './App.scss';
import Nav from "../nav/Nav";
import Header from '../header/Header';
import Display from '../display/display';
import Details from '../details/Details';
import Profile from '../profile/Profile';
import FitNotes from '../fitNotes/FitNotes';
import Error from '../error/Error';


export default function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Display/>} exact></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/your-fit-notes" element={<FitNotes/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}
