import React from 'react';
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlashCard from './components/flashcard';
import Home from './components/home';
import NavBar from './components/navbar';
import Mathematics from './components/Mathematics';
import Relation from './components/Relation and Function';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<NavBar />}></Route> */}
        <Route index element={<Home />} />         {/* child component */}
        <Route path='Flashcard' element={<FlashCard />} />
        <Route path='Flashcard/Mathematics' element={<Mathematics />} />
        <Route path='Flashcard/Mathematics/Relation-and-Functions' element={<Relation />} />

        {/* <Route path='flashsub' element={<FlashSub />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
