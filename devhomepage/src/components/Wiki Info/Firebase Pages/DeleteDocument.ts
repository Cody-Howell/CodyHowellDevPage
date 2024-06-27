import { Content } from "../../_WikiData";

export const DeleteDoc: Content = {
  primaryCode: [
  'static async deleteConcert(key) {',
  '  await deleteDoc(doc(db, "concerts", key));',
  '}'
  ],
  paragraphs: [
    `Very straightforward. Pass in a doc reference, and it will delete the document (it's still an await call).`
  ],
  seeSimilar: [],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/firestore/manage-data/delete-data",
      visibleName: "Delete Doc documentation"
    }
  ]
}