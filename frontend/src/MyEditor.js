import React from "react";
import { EditorState, Editor, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import debounce from "lodash/debounce";

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  saveContent = debounce((content) => {
    fetch("/content/", {
      method: "POST",
      body: JSON.stringify({
        content: convertToRaw(content),
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }, 1000);

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
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

export default MyEditor;
