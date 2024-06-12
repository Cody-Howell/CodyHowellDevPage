import React from 'react';
import './scsscomp/App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import profilePicture from './ProfilePictureDiscord.png';
import { Home } from './components/Home';
import { Challenges } from './components/Challenges.tsx';
import { Projects } from './components/Projects.js';
import { Wiki } from './components/Wiki.js';
import { About } from './components/About.js';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/challenges' element={<Challenges />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/wiki' element={<Wiki />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div id='header'>
        <img src={profilePicture} alt='logo'/>
        <nav id='navbar'>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/wiki">Wiki</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    )
  }
}

export default App;
