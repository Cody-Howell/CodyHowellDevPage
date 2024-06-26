import { Content } from "../../_WikiData";

export const ReactReadme: Content = {
    primaryCode: [],
    paragraphs: [
      `React uses vanilla JS and JSX components to render HTML, track state, and perform logic. I will be using 
          some TypeScript shorthands to ensure that props passing or anything that needs a specific type to work 
          will be straitforward to you. The syntax is this: (VariableName: Array<string>), which means VariableName 
          must be an array of strings. You can also nest, such as Array<Array<string>>. TS also allows type specification, 
          so Variable: MyType, where type is later defined by: type MyType = {// some stuff here}. This allows full description 
          of any type, readable through the code. `
    ],
    seeSimilar: [
      {
        path: "/typescript/readme",
        visibleName: "Typescript README"
      }
    ]
}