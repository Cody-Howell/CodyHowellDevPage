import React from 'react';

export class Wiki extends React.Component {
  render() {
    return (
      <div id='wikiPage'>
        <h1>Wiki</h1>
        <p>If you want to contribute a part to the wiki, please email me at wiki@codyhowell.dev. </p>
        <p>There are two parts to this wiki; first is a style guide of how I try to display and organize code, as well as some 
          "best practices" that I prefer. <br/> Second is the wiki portion, which will explain parts of languages and other 
          interfaces that we've figured out. In some cases, it will be a re-writing of the documentation, and in others it will 
          be a more preferred method to what might be expected. </p>
      </div>
    );
  }
}
