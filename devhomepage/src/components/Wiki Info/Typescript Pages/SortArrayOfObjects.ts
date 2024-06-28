import { Content } from "../../_WikiData";

export const SortArrayOfObjects: Content = {
  primaryCode: [
    '/**',
    ' * @param {Array<Object>} data - Array of data',
    ' * @param {string} filter - Value to compare',
    ' * @param {boolean} ascBool - True: Z-A',
    ' */',
    'function sortData(data: Array<Object>, filter: string, ascBool: boolean) : Array<Object>{',
    '  let work = data;',
    '  let output: Array<Object> = [];',
    '  if (ascBool){',
    '    while (work.length > 0){',
    '      let value = work[0][filter];',
    '      let index = 0;',
    '      for (let i = 1; i < work.length; i++) {',
    '        if (value < work[i][filter]) {',
    '          value = work[i][filter];',
    '          index = i;',
    '        }',
    '      }',
    '      if (work[index][filter] !== ""){',
    '        output.push(work[index]);',
    '      }',
    '      work.splice(index, 1);',
    '    }',
    '  } else {',
    '    while (work.length > 0){',
    '      let value = work[0][filter];',
    '      let index = 0;',
    '      for (let i = 1; i < work.length; i++) {',
    '        if (value > work[i][filter]) {',
    '          value = work[i][filter];',
    '          index = i;',
    '        }',
    '      }',
    '      if (work[index][filter] !== ""){',
    '        output.push(work[index]);',
    '      }',
    '      work.splice(index, 1);',
    '    }',
    '  }',
    '  return output;',
    '}'
  ],
  paragraphs: [
    `I built this function in my concert application for a Score Library implementation; given something like 15 properties, I wanted 
    to be able to sort by any of the properties of the object in either direction, and if it didn't include a value for that property, 
    it should be removed from the list (which I think is what this function does by default). Be aware of that. `,
    `It could probably be simplified in half if you wrote a way for the statement if (value <> work[i][filter]) to go both directions; 
    possibly with a helper function that passed in the ascBool and the two values and returned based on that. `
  ],
  seeSimilar: [],
  externalLinks: []
}