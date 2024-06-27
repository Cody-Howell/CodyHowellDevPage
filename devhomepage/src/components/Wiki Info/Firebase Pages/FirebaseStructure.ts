import { Content } from "../../_WikiData";

export const FirebaseStructure: Content = {
  primaryCode: [
    'import { initializeApp } from "firebase/app";',
    'import { getFirestore } from "firebase/firestore";',
    'import { getAuth } from "firebase/auth";',
    '',
    '// TODO: Replace the following with your project config',
    'const firebaseConfig = {',
    '   apiKey: string,',
    '   authDomain: website,',
    '   projectId: string,',
    '   storageBucket: website,',
    '   messagingSenderId: number,',
    '   appId: string,',
    '   measurementId: string',
    '};',
    '',
    '// Initialize Firebase',
    'const app = initializeApp(firebaseConfig);',
    '',
    '// Initialize Cloud Firestore and get a reference to the service',
    'const db = getFirestore(app); ',
    '',
    '// Initialize Firebase Authentication and get a reference to the service',
    'const auth = getAuth(app);',
    '',
    '',
    'class Initialize {  // Possible Firestore Database class name',
    '...}',
    'class Auth {  // Possible Authentication class name',
    '...}',
    '',
    'export { Initialize, Auth }'
  ],
  paragraphs: [
    `The whole structure is listed in the primary code above, so take that if you need to. `,
    `This is an important Style Guide topic. Firebase requires that an app is created with your project configuration object, 
      and doing this in all the components you need to query the database would be awful. Please move it to it's own class, 
      I'd recommend calling it firebase.js or .ts, if you're comfortable enough with TypeScript. SIDENOTE: This page assumes 
      you're working with the Authentication and the Firestore Database.`,
    `To find your project's config object, go to the upper left of the console inside your project, open Project Settings, 
      and scroll to the bottom. The object should be there. `,
    `CLASSES: After initializing your app, you can now start writing all of your functions! Don't do it the way I did the first time; 
    writing out a bunch of functions and exporting each of them individually. Yes, that makes it so you only get exactly the functions 
    you need in your component, but it means if you write 50 functions you need a really long export list, and it can be hard to scroll
    through. My suggestion (and my style guide) is to write them in classes (see a link below for an example class). Classes can usually 
    be minimized in text editors, making scrolling through many of them easy in the length of 20 lines instead of 2000 lines. They also 
    reduce the amount you export, since you can add arbitrarily many methods within classes without adjusting anything in your exports. `,
    `The primary use of these classes is to import one in your component and have many useful and related functions inside. In my 
    concert database, these are many functions that get different collections of concerts. Instead of exporting 12 functions that 
    do those different queries, I write 1 class that I import to have access to all of those queries. They are kept together, they are 
    minimize-able, and they are importable with 1 call.`
  ],
  seeSimilar: [
    {
      path: "/typescript/readme",
      visibleName: "Typescript README"
    },
    {
      path: "/firebase/(sg)-example-class",
      visibleName: "Example Class"
    }
  ],
  externalLinks: []
}