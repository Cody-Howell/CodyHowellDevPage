import { Content } from "../../_WikiData";

export const DocSyntax: Content = {
  primaryCode: [
    'const docRef = doc(db, collectionName: string, documentID: string);'
  ],
  paragraphs: [
    `This is the document reference. The return of the doc() function is the reference used in most of the 
    functions that are used to interact with the database; read, set, update, and delete. `,
    `This can be specified as a separate variable, as it is above, or you can specify it inline of the 
    function you're calling. I generally use the inline syntax in the code segments. `
  ],
  seeSimilar: [],
  externalLinks: []
}