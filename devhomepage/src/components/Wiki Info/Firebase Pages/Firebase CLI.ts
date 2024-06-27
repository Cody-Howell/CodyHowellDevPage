import { Content } from "../../_WikiData";

export const FirebaseCommandLine: Content = {
  primaryCode: [
    'firebase init',
    '',
    'firebase deploy'
  ],
  paragraphs: [
    `The Command Line is used to initalize projects and deploy current and preview versions of your app.`,
    `My workflow has generally been to create a project in the console, then follow its directions to use 
    firebase init to set up the project. Here, you set up everything you're going to use (Firestore, Authentication, 
    etc.), set up the deployment folders (if you build a React app, you'll want to select the Build folder), set up
    if you're developing a one-page app, and more. It's a pretty easy guide. After it's completed, it gives you access 
    in the console to everything you'll be using, such as the database. `,
    `The command line is also used for deployment, so the second command, firebase deploy, will deploy your folder 
    to the web. It runs pretty quickly. See also the preview page for another command. `
  ],
  seeSimilar: [
    {
      path: "/firebase/preview-pages",
      visibleName: "Preview Pages"
    }
  ],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/firestore/quickstart#set_up_your_development_environment",
      visibleName: "Environment Setup"
    }
  ]
}