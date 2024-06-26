import { LangFrame } from "../_WikiData.ts";
import { FirebaseREADME } from "./Firebase Pages/FirebaseReadme.ts";
import { FirebaseStructure } from "./Firebase Pages/FirebaseStructure.ts";
import { ExampleClass } from "./Firebase Pages/Example Class.ts";

let FirebaseWiki: LangFrame = {
  title: "Firebase",
  topics: [
    { title: "README", content: FirebaseREADME },
    { title: "(SG) Firebase Structure", content: FirebaseStructure },
    { title: "Example Class", content: ExampleClass },
    
  ]
}

export default FirebaseWiki;