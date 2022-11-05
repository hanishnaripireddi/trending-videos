import React from 'react';
import TrendingVideosList from './TrendingVideosList';
import LogIn from './login';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className='header'>
  
        <h1>TREN🎵DING</h1>

      </header>
      <Router>
        <Routes>
          <Route path='/trendingvideoslist' element={<TrendingVideosList />}></Route>
          <Route path='/' element={<LogIn/>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
