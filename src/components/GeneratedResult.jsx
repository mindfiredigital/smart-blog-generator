import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CheckIcon, ClipboardCopyIcon } from "@radix-ui/react-icons";

const GeneratedResult = ({ result, setActiveKey }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.description);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  return (
    <Card className="max-w-[900px] overflow-y-auto max-h-[70vh] bg-white">
      <CardContent className="pt-6">
        <div className="p-4 bg-slate-100 mb-4 text-xl rounded-md">
          {result.title}
        </div>
        <div className="relative">
          <ReactMarkdown
            className="bg-slate-100 p-6 rounded-md"
            components={{
              code: CodeBlock,
            }}
          >
            {result.description}
          </ReactMarkdown>
          <Button
            onClick={copyToClipboard}
            size="icon"
            className="bg-slate-200 border-slate-300 hover:bg-emerald-300 absolute top-4 right-4"
          >
            {copySuccess ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <ClipboardCopyIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneratedResult;
