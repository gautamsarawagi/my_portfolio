import React from 'react'
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

import Home from "./components/Home"
import Work from './components/Work'
import TopBar from './components/TopBar';
import Description from './components/Description';
import Skills from './components/Skills';
import Howtocontact from './components/Howtocontact';
import Platforms from './components/Platforms';
import Error from './components/Error';
import Loader from './components/Loader';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/topBar" element={<TopBar/>} />
          <Route path="/description" element={<Description/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/platforms" element={<Platforms/>} />
          <Route path="/howtoContact" element={<Howtocontact/>} />
            <Route path="/" element={<Home />} />
          <Route path='*' element={<Error/>} />
      </Routes>
      
    </Router>
  )
}

export default App