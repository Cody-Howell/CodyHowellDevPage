import { Content } from "../../_WikiData";

export const CollectionSyntax: Content = {
  primaryCode: [
    'const collectionRef = collection(db, collectionName: string);'
  ],
  paragraphs: [
    `This function is mainly used in addDoc(), since it can't specify a specific document (addDoc generates a random 
    key for the document, remember). So you give it a collection and it adds that object to it with a random key.`
  ],
  seeSimilar: [],
  externalLinks: []
}