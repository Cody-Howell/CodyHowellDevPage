import { Content } from "../../_WikiData";

export const WritingDocument: Content = {
  primaryCode: [
    'static async setUserObject(document: string, obj: object) {', 
    '  // Set Document inline',
    '  await setDoc(doc(db, "users", document), obj);',
    '  // Alternatively: ',
    '  await setDoc(doc(db, "users", document), {name: "Yo waddup"});',
    '}',  
    '',
    'static async addDirectEvent(event) {', 
    '  // Add Document inline',
    '  await addDoc(collection(db, "calendar"), event);', 
    '  // Alternatively: ',
    '  await addDoc(collection(db, "calendar"), {date: event.date, title: event.title});',
    '}',  
  ],
  paragraphs: [
    `Writing a document can be done one of two ways; first, you can Set a document, which allows you to specify 
    a specific key to be written to (if the document happens to already exist, it will overwrite it). The other is Add, which
    will generate a random key of length 20. Both examples are listed above. `,
    `The object in the second half of the set() or add() call can be passed in as an object in itself (such as from the 
    parameter list), or you can create the object inline as I do in nearly the final line. Before I understood, I made 
    some very large objects with the inline technique, so if you can figure it out how to pass in the object you want to 
    write, that's much easier to work with. `,
    `See the wiki page below for how to properly update data in a document; you can do it with Set, but it's not 
    the point of that call. `
  ],
  seeSimilar: [
    {
      path: "/firebase/doc-syntax",
      visibleName: "Doc Syntax"
    },
    {
      path: "/firebase/collection-syntax",
      visibleName: "Collection Syntax"
    },
    {
      path: "/firebase/updating-a-document",
      visibleName: "Updating a Document"
    }
  ],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document",
      visibleName: "Setting Documentation"
    },
    {
      fullPath: "https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document",
      visibleName: "Adding Documentation"
    }
  ]
}