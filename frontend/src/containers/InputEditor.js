import React from "react";
import { EditorState, Editor } from "draft-js";
import { connect } from "react-redux";
import { toTextUpdate } from "../redux/toText.actions";
import { Line } from "./Line.js";
import "../styles/css/components/InputEditor.css";

const blockRendererFn = () => ({
  component: Line,
});

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
    // dispatches the updated state to the store
    this.props.dispatch(toTextUpdate(this.state.toText));
  };

  render() {
    return (
      <div className="InputEditor">
        <h2>Type below:</h2>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          blockRendererFn={blockRendererFn}
        />
      </div>
    );
  }
}

export default connect()(InputEditor);
