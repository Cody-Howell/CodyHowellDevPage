import { Content } from "../../_WikiData";

export const TSArrayRendering: Content = {
    primaryCode: [
    'let renderedArray: React.ReactNode[] = [];',
    'for (let i = 0; i < array.length; i++) {',
    '  renderedArray.push(<p>Element {array[i]}</p>)',
    '}',
    '',
    'return (',
    '  <div>',
    '    {renderedArray}',
    '  </div>',
    ')'
    ],
    paragraphs: [
      `Very similar to classical React syntax. It just needs the React.ReactNode[] specification, then it works the same.`
    ],
    seeSimilar: [
      {
        path: "/react/rendering-from-arrays",
        visibleName: "React Array Rendering"
      }
    ]
}