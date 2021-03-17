import React from "react";
import { EditorState, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import debounce from "lodash/debounce";

class InputEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  saveContent = debounce((content) => {
    fetch("/translate/", {
      method: "POST",
      body: JSON.stringify({
        foreign: content,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }, 1000);

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState.getPlainText());
    this.setState({
      editorState,
    });
  };

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log("Content state text: " + contentState.getPlainText());
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default InputEditor;
