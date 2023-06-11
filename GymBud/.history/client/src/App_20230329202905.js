import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Newbie from './views/Newbie';
import MacroCalculator from './views/Macros';
import RegisterPage from './views/Register';
import LoginPage from './views/Login';
import WorkoutPlanner from './views/WorkoutPlanner';
import MealPlanner from './views/MealPlanner';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Newbie/>} path="/beginners"/>
          <Route element={<MacroCalculator/>} path="/macros"/>
          <Route element={<RegisterPage/>} path="/register"/>
          <Route element={<LoginPage/>} path="/login"/>
          <Route element={<WorkoutPlanner/>} path="/planner"/>
          <Route element={<MealPlanner/>} path="/meal"/>
      </Routes>
    </div>
  );
}

export default App;
