import React from "react";
import { EditorState } from "draft-js";
import InputEditor from "./InputEditor";
import TranslatedDisplay from "./TranslatedDisplay";
import "../styles/css/styles.css";

const Translator = (props) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="wrapper">
      <InputEditor
        editorState={editorState}
        setEditorState={setEditorState}
      ></InputEditor>
      <TranslatedDisplay editorState={editorState}></TranslatedDisplay>
    </div>
  );
};

export default Translator;
