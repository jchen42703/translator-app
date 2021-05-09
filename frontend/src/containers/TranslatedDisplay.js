import React, { useEffect, useState } from "react";
import { Display } from "./Display";
import "../styles/css/styles.css";

const TranslatedDisplay = (props) => {
  const [toText, setToText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    setToText(props.editorState.getCurrentContent().getPlainText());
  }, [props.editorState.getCurrentContent().getPlainText()]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("text: " + toText);
    const setUpdated = async () => {
      const result = await fetch("/translate/", {
        method: "POST",
        body: JSON.stringify({
          foreign: toText,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }).then((res) => res.json());

      setTranslatedText(result.translated);
    };

    setUpdated();
  }, [toText]);

  return (
    <div className="TranslatedDisplay">
      <h2>Result:</h2>
      <Display text={translatedText}></Display>
    </div>
  );
};

export default TranslatedDisplay;
