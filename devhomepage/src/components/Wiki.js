import React from 'react';
import { Link } from 'react-router-dom';

export class Wiki extends React.Component {
  render() {
    return (
      <div id='wikiPage'>
        <h1>Wiki</h1>
        <p>If you want to contribute a part to the wiki, please email me at wiki@codyhowell.dev. </p>
        <p>There are two parts to this wiki; first, there will be two labels: (SG) for Style Guide,
           which is how I try to display and organize some specific parts of code, as well as be some "best 
           practices" that I prefer, and Library (LB) of useful functions or components. 
           <br/> Second is the wiki portion, which will explain parts of languages and other interfaces that we've 
           figured out. In some cases, it will be a re-writing of the documentation, and in others it will be a more 
           preferred method to what might be expected. </p>

        <p>Select a category below to start exploring.</p>
        <div className='wikiLinks'>
          <Link to="/wiki/react" className='returnLink'>React</Link>
          <Link to="/wiki/javascript" className='returnLink'>JavaScript</Link>
          <Link to="/wiki/typescript" className='returnLink'>TypeScript</Link>
          <Link to="/wiki/firebase" className='returnLink'>Firebase</Link>
        </div>
      </div>
    );
  }
}
