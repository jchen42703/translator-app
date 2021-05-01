import React from "react";
import { Editor } from "draft-js";
import { LineGutter } from "./LineGutter";
import "../styles/css/components/InputEditor.css";

const blockRendererFn = () => ({
  component: LineGutter,
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
