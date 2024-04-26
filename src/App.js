import logo from './logo.svg';
import './App.css';
import Todos from './todo';
import axios from 'axios';
import Propscomp from './passingprops';
import { useState } from 'react';
import Counter from './counter';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/ReactRouter/Home';
import Reactroutes from './components/ReactRouter/routes';
import NestedRoute from './components/ReactRouter/home1';
import SideNav from './components/sidenav/sidenav';
import LandingComponent from './components/LandingPage/landingPage';
import { useEffect} from 'react';



function App() {

  
 
  
  return (
    <div className="App">

      <Routes>
        <Route index element={<LandingComponent />} />
        <Route path='/home' element={<Home />} />
        <Route path='home/nestedroute' element={<NestedRoute />} />
        <Route path='*' element={<div> Not found</div>} />
      </Routes>


      {/* <Link to='/home'>Click</Link> */}

      {/* Welcome    */}
    </div>
  );
}

export default App;
