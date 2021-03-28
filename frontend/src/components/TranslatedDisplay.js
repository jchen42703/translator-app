import React, { useEffect, useState } from "react";

const TranslatedDisplay = (props) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const setUpdated = async () => {
      const result = await fetch("/translate/", {
        method: "POST",
        body: JSON.stringify({
          foreign: props.text,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }).then((res) => res.json());

      console.log("result of translateContent: " + result.translated);
      setTranslatedText(result.translated);
    };

    setUpdated();
  }, [props.text]);

  return (
    <div>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslatedDisplay;
