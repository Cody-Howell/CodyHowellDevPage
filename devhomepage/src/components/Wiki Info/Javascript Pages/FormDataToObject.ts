import { Content } from "../../_WikiData";

export const FormDataToObject: Content = {
  primaryCode: [
    'function formDataToObject(form) {',
    '  let data = {};',
    '  form.forEach((value, key) => {',
    '    data[key] = value;',
    '  });',
    '  return data;',
    '}'
  ],
  paragraphs: [
    `The form parameter is an object of the type FormData, and the function returns an object with all the same 
    properties. `,
    `This was written because Firebase Firestore functions have difficulty working with FormData objects, which happens 
    to be a handy way to collet a bunch of inputs into an object. Passing the form through this function renders it as 
    a classic object that Firebase can better read and understand. `
  ],
  seeSimilar: [],
  externalLinks: []
}