import React from 'react';
import './scsscomp/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import profilePicture from './ProfilePictureDiscord.png';
import { Home } from './components/Home';
import { Challenges } from './components/Challenges.tsx';

class App extends React.Component {
  constructor(props){
    super(props);
    document.title = "Cody Howell Dev";
  }

  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/challenges' element={<Challenges />} />
          </Routes>
        </BrowserRouter>
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
        </nav>
      </div>
    )
  }
}

export default App;
