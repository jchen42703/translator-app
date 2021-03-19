import React, { useEffect, useState } from "react";
// import debounce from "lodash/debounce";

const TranslatedDisplay = (props) => {
  // function translateContent(content) {
  //   const translated = debounce((content) => {
  //     fetch("/translate/", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         foreign: content,
  //       }),
  //       headers: new Headers({
  //         "Content-Type": "application/json",
  //       }),
  //     });
  //   }, 1000);
  //   return translated;
  // }
  function translateContent(content) {
    const translated = fetch("/translate/", {
      method: "POST",
      body: JSON.stringify({
        foreign: content,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    console.log(`translateContent: ${translated}`);
    return translated.text;
  }

  const [translatedText, setTranslatedText] = useState(
    translateContent(props.text)
  );

  useEffect(() => {
    setTranslatedText(translateContent(props.text));
  }, [props.text]);

  return (
    <div>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslatedDisplay;
