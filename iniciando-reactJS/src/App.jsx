import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {

  return (
    <Router>
      <div className="containerPage">
        <div className="containerBox">
          <div className="content">
            <div className="sec-one mb-3">
              <Header />
            </div> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/:taskTitle" element={<TaskDetails />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;