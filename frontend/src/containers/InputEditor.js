import React from "react";
import { Editor } from "draft-js";
import "../styles/css/components/InputEditor.css";

const InputEditor = (props) => {
  return (
    <div className="InputEditor">
      <h2>Type below:</h2>
      <Editor editorState={props.editorState} onChange={props.setEditorState} />
    </div>
  );
};

export default InputEditor;
