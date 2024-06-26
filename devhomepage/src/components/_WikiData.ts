import ReactWiki from "./Wiki Info/React.ts";
import TypeScriptWiki from "./Wiki Info/Typescript.ts";
import JavaScriptWiki from "./Wiki Info/Javascript.ts";
import FirebaseWiki from "./Wiki Info/Firebase.ts";

const wikiData: Array<LangFrame> = [
  ReactWiki, 
  JavaScriptWiki, 
  TypeScriptWiki,
  FirebaseWiki
];

type LangFrame = { // Short for Language/Framework, dealing with both
  title: string,
  topics: Array<{ title: string, content: Content }>
}

type Content = {
  primaryCode: Array<string>,
  paragraphs: Array<string>,
  seeSimilar: Array<{
    path: string, 
    visibleName: string
  }>
}

export {wikiData, LangFrame, Content}