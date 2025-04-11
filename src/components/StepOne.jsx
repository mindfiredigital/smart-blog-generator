import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import GetApiKey from "./GetApiKey";
import BlogGenerateForm from "./BlogGenerateForm";
import OpenAiService from "../service/openAiService";

const StepOne = ({ result, setResult, apiKey, setActiveKey, setApiKey }) => {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (apiKey) {
      setLoading(true);
      OpenAiService.validateApiKey(apiKey)
        .then((res) => {
          const modelPresent = res.data.data.some(
            (item) => item.id === "gpt-3.5-turbo"
          );
          setApiKey(apiKey);
          if (modelPresent) {
            setValidated(true);
            setLoading(false);
          }
        })
        .catch((Err) => {
          setApiKey(apiKey);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <Card className="min-w-[450px] bg-white">
      {loading ? (
        <div className="space-y-2 p-8">
          <div className="animate-pulse rounded-md bg-slate-200 h-8 w-full" />
          <div className="animate-pulse rounded-md bg-slate-200 h-8 w-full" />
          <div className="animate-pulse rounded-md bg-slate-200 h-8 w-full" />
          <div className="animate-pulse rounded-md bg-slate-200 h-8 w-full" />
        </div>
      ) : (
        <>
          <CardHeader className="items-center">
            <CardTitle className="text-slate-700 text-lg text-center">
              Smart Blog Generator
            </CardTitle>
            {apiKey ? (
              validated ? (
                <CardDescription className="max-w-[350px] text-slate-400 text-base text-center">
                  Efficiently generates informative blog content tailored to
                  user specifications
                </CardDescription>
              ) : (
                <CardDescription className="text-orange-600 text-base text-center">
                  Please enter correct OpenAi key to get started...
                </CardDescription>
              )
            ) : (
              <CardDescription className="text-slate-400 text-base text-center">
                Please provide OpenAi key to get started...
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {validated ? (
              <BlogGenerateForm
                apiKey={apiKey}
                setActiveKey={setActiveKey}
                setResult={setResult}
              />
            ) : (
              <GetApiKey setApiKey={setApiKey} setValidated={setValidated} />
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default StepOne;
