import { Content } from "../../_WikiData";

export const FinishSignInPage: Content = {
  primaryCode: [
"import React from 'react';",
"import { Auth } from '../firebase';",
"",
"export class FinishSignIn extends React.Component {",
"  async componentDidMount(){",
"    AuthService.completeSignIn();",
"    // Here you can refresh, redirect to another page, or let them navigate away.", 
"  }",
"",
"  render() {",
"    return (",
"      <div id='finishSignInPage'>",
"        <h1>Signed In</h1>",
"        <p>Hey, thanks! You should be finished signing in, so you now get some more options in your Account page. </p>",
"      </div>",
"    );",
"  }",
"}",
  ],
  paragraphs: [
    `This is some of my component from my concert website. All this component needs to do is call completeSignIn() on loading, 
    and this conpomponent is what you reference in your return link from the email.`
  ],
  seeSimilar: [
    { path: "/firebase/(lb)-default-auth-class", visibleName: "Default Auth Class" }
  ],
  externalLinks: []
}