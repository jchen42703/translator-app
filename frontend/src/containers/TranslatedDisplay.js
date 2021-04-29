import React, { useEffect, useState } from "react";
import store from "../redux/store";
import "../styles/css/components/TranslatedDisplay.css";

const TranslatedDisplay = (props) => {
  const [toText, setToText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  /**
   * Callback that set the current store updated text to translate
   */
  function handleChange() {
    setToText(store.getState().toText);
  }

  store.subscribe(handleChange);

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
    <div class="TranslatedDisplay">
      <h2>Result:</h2>
      {/* styling preserves new lines */}
      <div style={{ "white-space": "pre-line" }}>{translatedText}</div>
    </div>
  );
};

export default TranslatedDisplay;
