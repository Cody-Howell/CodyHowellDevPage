import { Content } from "../../_WikiData";

export const FirebaseConsole: Content = {
  primaryCode: [],
  paragraphs: [
    `The Firebase Console has access to all the backend of your project. Below I'll go through most of the things 
    I know that the console allows you to do. `,
    `FIRESTORE DATABASE: In Firestore Database, you can create new collections, read and modify any document, and perform 
    queries to search for a specific value within a collection/document. The restrictions in the document builder don't allow 
    arrays of objects, though importantly, you can upload one through a document write and it will maintain that nesting. `,
    `AUTHENTICATION: In Authenticator, you can define where users are allowed to be authenticated from (email/password, Google, 
    Facebook, phone, Twitter, Github, etc.), and check current users. On the Users page, you can see their identifier (usually 
    an email), what providers they use to sign in, when they created their account, when they last signed in, and their UID. The 
    UID is another unique identifier (around 28 characters) for the user that happens to work pretty well if you use the Firestore 
    Database, as it can be their documentID to a Users collection, and inside it you can store a bunch of information about them. 
    In my database, it stores a "Security Level" which gives them access to different pages, their email, and their visible 
    username. `,
    `HOSTING: In Hosting, after setting it up, you can see releases (which are versions posted from a command line call, firebase 
    deploy) which allows you to revert to previous versions of your website. You can see domains, which are generally the two 
    default ones, and allows you to add any custom domains you want to add. You can see preview channels, which post a new version
     of the website to a hidden link that can be shared with others to preview before going to production. `
  ],
  seeSimilar: [
    {
      path: "/firebase/command-line-firebase",
      visibleName: "Firebase Command Line Calls (DNC)"
    },
    {
      path: "/firebase/custom-domain",
      visibleName: "Adding a Custom Domain"
    },
    {
      path: "/firebase/preview-channels",
      visibleName: "Preview Channels (DNC)"
    }
  ],
  externalLinks: []
}