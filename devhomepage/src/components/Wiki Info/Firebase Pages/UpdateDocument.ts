import { Content } from "../../_WikiData";

export const UpdateDocument: Content = {
  primaryCode: [
  'static async updateTechCheckConcert(concertID, newObjectValues, removeFromCheck: bool) {',
  '  await updateDoc(doc(db, "concerts", concertID), {',
  '    techsWhoChecked: newObjectValues.techsWhoChecked,',
  '    techsWhoCommented: newObjectValues.techsWhoCommented,',
  '    techCheck: removeFromCheck,',
  '    toPublic: true',
  '  });',
  '}'
  ],
  paragraphs: [
    `This is an example method from my concert database. The object that the doc() call is referencing has around 
    25 properties, but updateDoc() allows you to only change some properties without giving the entire object back. 
    This method is used to audit concerts, so I add names in, their comments, check if it should be removed from the
    audit queue, and ensure that toPublic is set to true so that it is visible to the public. `
  ],
  seeSimilar: [],
  externalLinks: [
    {
      fullPath: "https://firebase.google.com/docs/firestore/manage-data/add-data#update-data",
      visibleName: "Update Data documentation"
    }
  ]
}