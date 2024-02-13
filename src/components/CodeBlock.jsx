import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = (props) => {
  const { code, children, className, node, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  return match ? (
    <div className="code-block-wrapper">
      <SyntaxHighlighter
        {...rest}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        language={match[1]}
        style={coldarkCold}
      />
    </div>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
};

export default CodeBlock;
