import React from "react";
import { Editor } from "draft-js";
import EditorParagraph from "./EditorParagraph";
import "../styles/css/styles.css";

const blockRendererFn = () => ({
  component: EditorParagraph,
});

const InputEditor = (props) => {
  return (
    <div className="InputEditor">
      <h2>Type below:</h2>
      <Editor
        editorState={props.editorState}
        onChange={props.setEditorState}
        blockRendererFn={blockRendererFn}
      />
    </div>
  );
};

export default InputEditor;
