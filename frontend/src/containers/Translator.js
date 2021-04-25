import React from "react";
import InputEditor from "./InputEditor";
import TranslatedDisplay from "./TranslatedDisplay";
import "../styles/css/components/wrappers.css";

const Translator = (props) => {
  return (
    <div className="wrapper">
      <InputEditor></InputEditor>
      <TranslatedDisplay></TranslatedDisplay>
    </div>
  );
};

export default Translator;
