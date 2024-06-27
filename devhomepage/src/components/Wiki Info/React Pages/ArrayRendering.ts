import { Content } from "../../_WikiData";

export const ArrayRendering: Content = {
  primaryCode: [
    'let renderedArray = [];',
    'for (let i = 0; i < array.length; i++) {',
    '  renderedArray.push(<p>Element {array[i]}</p>)',
    '}',
    '',
    'return (',
    '  <div>',
    '    {renderedArray}',
    '  </div>',
    ')'
  ],
  paragraphs: [
    `React can take an array of elements and display them by calling the array inside the return() function. This array 
      can be built using any JavaScript array-building technique, though I generally use the for-loop method of creation. `
  ],
  seeSimilar: [
    {
      path: "/typescript/ts-react-array-rendering",
      visibleName: "TypeScript Array Rendering"
    }
  ],
  externalLinks: []
}