import { Content } from "../../_WikiData";

export const ForVsMapFunction: Content = {
    primaryCode: [
      '// For loop',
      'let array = [];',
      'for (let i = 0; i < incomingArray.length; i++) {',
      '  array.push(<p key={i}>{incomingArray[i]}</p>);',
      '}',
      '',
      '// Similar Map function',
      'let array = incomingArray.map((value, index) => <p key={index}>{value}</p>)'
    ],
    paragraphs: [
      `This page is just a minor complaint on my part, since before I haven't really tried to work on 
      map functions and they were confusing to me. This is just a straitforward example (using a bit 
      of common React syntax) of a use case for either function. `
    ],
    seeSimilar: []
}