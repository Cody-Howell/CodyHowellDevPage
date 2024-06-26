import { Content } from "../../_WikiData";

export const CodeViewerComponent: Content = {
  primaryCode: [
    'class CodeViewer extends React.Component {',
    '  render() {',
    '    let codeDisplay = [];',
    '    let codeLines = this.props.codeLines;',
    '    for (let i = 0; i < codeLines.length; i++) {',
    '      codeDisplay.push(codeLines[i] === "" ?  // Ternary operator',
    '         <div key={i} className="code-line">&nbsp;</div> : ',
    '         <div key={i} className="code-line">{codeLines[i]}</div>);',
    '    }',
    '',
    '    return (',
    '      <div className="code-interface">',
    '        <pre>',
    '          <code>',
    '            {codeDisplay}',
    '          </code>',
    '        </pre>',
    '      </div>',
    '    )',
    '  }',
    '}',
    '',
    '// Called by: ',
    '<CodeViewer codeLines={arrayOfStrings: Array<string>} />'
  ],
  paragraphs: [
    `This component can be copied as is. For use, the codeLines prop must be an array of strings. As an example, this 
      component is displaying it's own code.`,
    `For display, you can CSS it with the .code-interface class and .code-line class, which has <div> default 
    padding/margins. It didn't render any empty lines to start, but using the ternary operator and the non-breaking 
    space (&nbsp;), it now can display empty lines for spacing. It's pretty nice.`
  ],
  seeSimilar: []
}