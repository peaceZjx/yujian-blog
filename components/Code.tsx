import React, { useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

interface CodeProps {
  value: string;
  language?: string;
}

const Code: React.FC<CodeProps> = ({ value }) => {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage('javascript', js);
  }, []);
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

export default Code;
