import { LangFrame } from "../_WikiData.ts";
import { FirebaseREADME } from "./Firebase Pages/FirebaseReadme.ts";
import { FirebaseStructure } from "./Firebase Pages/FirebaseStructure.ts";
import { ExampleClass } from "./Firebase Pages/Example Class.ts";
import { ReadingDocument } from "./Firebase Pages/ReadingDocument.ts";
import { WritingDocument } from "./Firebase Pages/WritingDocument.ts";
import { DocSyntax } from "./Firebase Pages/Doc Syntax.ts";
import { CollectionSyntax } from "./Firebase Pages/Collection Syntax.ts";
import { UpdateDocument } from "./Firebase Pages/UpdateDocument.ts";
import { DeleteDoc } from "./Firebase Pages/DeleteDocument.ts";
import { FirebaseConsole } from "./Firebase Pages/Firebase Console.ts";
import { CustomDomain } from "./Firebase Pages/Custom Domain.ts";
import { PreviewPages } from "./Firebase Pages/Preview Pages.ts";
import { FirebaseCommandLine } from "./Firebase Pages/Firebase CLI.ts";

let FirebaseWiki: LangFrame = {
  title: "Firebase",
  topics: [
    { title: "README", content: FirebaseREADME },
    { title: "(SG) Firebase Structure", content: FirebaseStructure },
    { title: "Doc Syntax", content: DocSyntax },
    { title: "Collection Syntax", content: CollectionSyntax },
    { title: "Firebase Console", content: FirebaseConsole },
    { title: "Command Line Firebase", content: FirebaseCommandLine },
    { title: "(SG) Example Class", content: ExampleClass },
    { title: "Reading a Document", content: ReadingDocument },
    { title: "Writing a Document", content: WritingDocument },
    { title: "Updating a Document", content: UpdateDocument },
    { title: "Deleting a Document", content: DeleteDoc },
    { title: "Custom Domain", content: CustomDomain },
    { title: "Preview Pages", content: PreviewPages },
    
  ]
}

export default FirebaseWiki;