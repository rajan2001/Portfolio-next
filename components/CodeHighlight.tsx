"use client"
import { useTheme } from 'next-themes';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HigligtCode = ({ codeString }: any) => {
    const { theme } = useTheme()

    return (
        <SyntaxHighlighter language="javascript" wrapLines={true}
            style={docco}
            customStyle={{ backgroundColor: "#64748b1a", color: `${theme === "dark" ? "white" : "black"}`, width: "70%", padding: "1.5rem", paddingLeft: "2.5rem", borderRadius: "1rem" }}
        >
            {codeString}
        </SyntaxHighlighter>
    );
};

export default HigligtCode