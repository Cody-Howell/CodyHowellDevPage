import { LangFrame } from "../_WikiData.ts";
import { ReactReadme } from "./React Pages/README.ts";
import { CodeViewerComponent } from "./React Pages/(LB) Code Viewer.ts";
import { ArrayRendering } from "./React Pages/ArrayRendering.ts";
import { AutoReAuth } from "./React Pages/AutoReAuth.ts";


let ReactWiki: LangFrame = {
  title: "React",
  topics: [
    { title: "README", content: ReactReadme },
    { title: "(LB) Code Viewer Component", content: CodeViewerComponent },
    { title: "Rendering From Arrays", content: ArrayRendering },
    { title: "(LB) Re-Auth on Load-In", content: AutoReAuth },
    
  ]
}

export default ReactWiki;