import { Content } from "../../_WikiData";

export const ExampleClass: Content = {
  primaryCode: [
    '// firebase.js',
    'class Init {',
    '  static async getProductionInfo() {',
    '    const docRef = doc(db, "initialize", "production");',
    '    const docSnap = await getDoc(docRef);',
    '    let valueExport = docSnap.data();',
    '    return valueExport;',
    '  }',
    '',
    '  static async getMessages() {',
    '    const docRef = doc(db, "initialize", "announcements");',
    '    const docSnap = await getDoc(docRef);',
    '    let valueExport = docSnap.data();',
    '    return valueExport;',
    '  }',
    '',
    '  static async getRecentConcerts() {',
    '    const docRef = doc(db, "initialize", "recentConcerts");',
    '    const docSnap = await getDoc(docRef);',
    '    let valueExport = docSnap.data();',
    '    return valueExport;',
    '  }',
    '',
    '  static async getSearchOptions() {',
    '    const docRef = doc(db, "initialize", "searchOptions");',
    '    const docSnap = await getDoc(docRef);',
    '    let valueExport = docSnap.data();',
    '    return valueExport;',
    '  }',
    '}',
    'export { Init } ',
    '',
    '// component.js',
    "import { Init } from './firebase.js'",
    'let messages = await Init.getMessages();'
  ],
  paragraphs: [
    `This class is for components that need some initial information from the database, such as lists that 
      they will need or very common documents that are used throughout your components. The example above 
      is from my concert database, where I get a number of documents on different pages but they all interact 
      with the "initialize" collection. For your classes, you can decide if things within classes are only readers, 
      only writers, only interact with specific collections, or some other grouping applies. `,
    `To make it super clear, defining a new function within the class should look like: static async functionName() {...}. 
    Most functions within Firebase are async calls to the database to do something, so propogating that async call is 
    important. I find that even when I use a non-async call, I still use the async modifier in the method. `
  ],
  seeSimilar: [],
  externalLinks: []
}