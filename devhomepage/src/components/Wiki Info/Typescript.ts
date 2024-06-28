import { LangFrame } from "../_WikiData.ts";
import { TSReadme } from "./Typescript Pages/README.ts";
import { SortArrayOfObjects } from "./Typescript Pages/SortArrayOfObjects.ts";
import { TSArrayRendering } from "./Typescript Pages/TSArrayRendering.ts";

let TypeScriptWiki: LangFrame = {
  title: "TypeScript",
  topics: [
    { title: "README", content: TSReadme },
    { title: "TS React Array Rendering", content: TSArrayRendering },
    { title: "(LB) Sort Array of Objects", content: SortArrayOfObjects },
    
  ]
}

export default TypeScriptWiki;