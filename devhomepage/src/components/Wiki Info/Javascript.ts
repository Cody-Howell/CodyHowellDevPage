import { LangFrame } from "../_WikiData.ts";
import { JavascriptREADME } from "./Javascript Pages/JavaScriptReadme.ts";
import { ForVsMapFunction } from "./Javascript Pages/For vs Map.ts";
import { FormDataToObject } from "./Javascript Pages/FormDataToObject.ts";
import { RandNumberBetween } from "./Javascript Pages/RandNumberBetween.ts";

let JavaScriptWiki: LangFrame = {
  title: "JavaScript",
  topics: [
    { title: "README", content: JavascriptREADME },
    { title: "For Vs Map", content: ForVsMapFunction },
    { title: "(LB) Form Data to Object Function", content: FormDataToObject },
    { title: "(LB) Random Number Between Function", content: RandNumberBetween },
    
  ]
}

export default JavaScriptWiki;