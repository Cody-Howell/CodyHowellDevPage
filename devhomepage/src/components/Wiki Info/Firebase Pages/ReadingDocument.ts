import { Content } from "../../_WikiData";

export const ReadingDocument: Content = {
  primaryCode: [
    'static async getDocument() {',
    '  const docRef = doc(db, collectionName, documentID);',
    '  const docSnap = await getDoc(docRef);',
    '  // Alternatively: ',
    '  const docSnap = await getDoc(doc(db, collectionName, documentID));',
    '',
    '  let valueExport = docSnap.data();',
    '  return valueExport;',
    '}',
    '',
    '// Doubly alternatively: (this probably works)',
    'static async getDocument(collection: string, document: string) {',
    '  const docSnap = await getDoc(doc(db, collection, docuemnt));',
    '  return docSnap.data();',
    '}',
  ],
  paragraphs: [
    `This is a full function that has some fill-in-the-blank areas for the document you're getting. 
    You can use the top for a helpful function with no parameters to get a specific item, or you can 
    generalize with the lower one. I generally use mutliple functions with specific names and no parameters
    to get my documents. `,
    `If you do use the lower one, that means you would have to know the collection and document that you need to 
    request, which is generally fine for hand-crafted documents. See the link below for querying items with a given parameter. `
  ],
  seeSimilar: [
    {
      path: "/firebase/doc-syntax",
      visibleName: "Doc Syntax"
    }
  ],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/firestore/query-data/get-data",
      visibleName: "Reading Documentation"
    }
  ]
}