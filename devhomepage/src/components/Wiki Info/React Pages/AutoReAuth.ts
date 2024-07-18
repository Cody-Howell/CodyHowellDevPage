import { Content } from "../../_WikiData";

export const AutoReAuth: Content = {
  primaryCode: [
'async componentDidMount() {',
'  // Check for the users UID every 0.5 seconds for a maximum of 10 seconds',
'  let tries = 0;',
'  const interval = setInterval(async () => {',
'    let user = Auth.getAuthInformation();',
'    if (user) {',
'      clearInterval(interval); // Stop the interval if the UID is found',
'      user = user.uid; // This comes from the authentication object',
'      this.updateUser(user);',
'    } else {',
'      tries++;',
'      if (tries >= 20) {',
'        clearInterval(interval); // Stop the interval after 10 seconds',
'        console.log("User not authenticated after 10 seconds.");',
'      }',
'    }',
'  }, 500);',
'}',
'',
'updateUser = async (userUID) => {',
'  // Custom logic for my state',
'  let fullUser = await Auth.getUserInformation(userUID);',
'  let sl = parseInt(fullUser.sl);',
'  console.log(`User SL: {sl}`);',
'  this.setState({',
'    user: {',
'      uid: userUID,',
'      sl: sl,',
'      email: fullUser.email',
'    }',
'  });',
'}',
  ],
  paragraphs: [
    `To be used in the App class for every time they load in. Authentication already automatically re-enrolls to reduce the number 
    of times you have to sign in, but it doesn't always update the state when you do so (unless you basically only check from the 
    auth object every time), but this system allows you to read a value from the database and set state in your app. `
  ],
  seeSimilar: [
    { path: "/firebase/(lb)-default-auth-class", visibleName: "Default Auth Class"}
  ],
  externalLinks: []
}