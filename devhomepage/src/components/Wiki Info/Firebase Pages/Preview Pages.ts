import { Content } from "../../_WikiData";

export const PreviewPages: Content = {
  primaryCode: [
    'firebase hosting:channel:deploy feature-name-here --expires #d'
  ],
  paragraphs: [
    `From the command line inside your project, this is the command that I use when I want to preview. The first two 
    bits of space-separated text are the same, firebase and the hosting chain. "feature-name-here" is what you replace 
    with your identifier (though I suppose you don't have to make it memorable at all), and will be included in the 
    URL you'll be sharing out. After that is the expiry command, which will set the preview to not be available after 
    a certain number of days. I usually set it to 1d so that I can just get on the link and verify that nothing is broken
    and/or all the features I wanted to build are inside and working on both the web and mobile versions of my app. `
  ],
  seeSimilar: [],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/hosting/test-preview-deploy#preview-channels",
      visibleName: "Preview Channel Documentation"
    }
  ]
}