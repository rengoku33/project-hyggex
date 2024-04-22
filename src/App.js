import React from 'react';
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlashCard from './components/flashcard';
import Home from './components/home';
import NavBar from './components/navbar';


const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<NavBar />}>      {/* parent */}
    //     <Route index element={<Home />} />         {/* child component */}
    //     <Route path='flashcard' element={<FlashCard />} />
    //   </Route>
    // </Routes>
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<NavBar />}></Route> */}
        <Route index element={<Home />} />         {/* child component */}
        <Route path='flashcard' element={<FlashCard />} />
      </Routes>
    </Router>
  );
}

export default App;
