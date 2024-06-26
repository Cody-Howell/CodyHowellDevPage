import { Content } from "../../_WikiData";

export const TSReadme: Content = {
    primaryCode: [
      'let name: string = "Person";',
      'const array: Array<number> = [1, 2, 3];',
      'let peopleArray: Array<{name: string, birthday: string}> = [];'
    ],
    paragraphs: [
      `TypeScript is an addon-type language to JavaScript that can help enforce types. This means that you can 
      force a number to be an input to a function, a variable to be a certain type, or in the case of React, 
      force properties of props and state to be as-specified which should help the debugging process.`,
      `Importantly, you can also specify custom types either as their own definition (perhaps in a separate file)
      or inline, as line 3 does in this example. It will force every object in the array to be objects with only those 
      two properties.`
    ],
    seeSimilar: []
}