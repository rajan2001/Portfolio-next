"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HigligtCode = () => {
    const codeString = '(num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={docco} customStyle={{ backgroundColor: "#94a3b8" }}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default HigligtCode