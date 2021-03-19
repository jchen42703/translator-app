import React from "react";
import { EditorState, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import TranslatedDisplay from "./TranslatedDisplay.js";

class InputEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      toText: "",
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState: editorState,
      toText: editorState.getCurrentContent().getPlainText(),
    });
  };

  render() {
    return (
      <div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
        <TranslatedDisplay text={this.state.toText}></TranslatedDisplay>
      </div>
    );
  }
}

export default InputEditor;
