import React from "react";
import { EditorState, Editor } from "draft-js";
import "draft-js/dist/Draft.css";
import { connect } from "react-redux";
import { toTextUpdate } from "../redux/toText.actions";

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
      <div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default connect()(InputEditor);
