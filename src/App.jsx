import React, { useState } from "react";
import StepOne from "./components/StepOne";
import GeneratedResult from "./components/GeneratedResult";
import "../global.css";

const App = (props) => {
  const [result, setResult] = useState({});
  const [apiKey, setApiKey] = useState(props.apiKey);
  const [activeKey, setActiveKey] = useState("generate");
  return (
    <div className={"sbg-card " + props.cardClassName}>
      {activeKey == "generate" ? (
        <StepOne
          result={result}
          setResult={setResult}
          setActiveKey={setActiveKey}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />
      ) : (
        <GeneratedResult result={result} setActiveKey={setActiveKey} />
      )}
    </div>
  );
};

export default App;
