import React from 'react';
import './scsscomp/App.css';
import { BrowserRouter, Route, Routes, Link, HashRouter } from 'react-router-dom';
import profilePicture from './ProfilePictureDiscord.png';
import { Home } from './components/Home';
import { Challenges } from './components/Challenges.tsx';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/challenges' element={<Challenges />} />
            <Route path='/projects' element={<Projects />} />
            
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return(
      <div id='projectPage'>
        <h1>Projects</h1>
      </div>
    )
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
        </nav>
      </div>
    )
  }
}

export default App;
