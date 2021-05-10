import React from "react";
import { EditorBlock } from "draft-js";
import { FoldButton } from "./FoldBlockButton";
import "../styles/css/styles.css";

/**
 * Represents a paragraph in the editor with the gutter (fold buttons). Each paragraph is separated by a single new line.
 * Note: EditorBlock is contains the true text of the paragraph.
 */
class EditorParagraph extends React.Component {
  render() {
    return (
      <div className="block">
        <FoldButton></FoldButton>
        <EditorBlock {...this.props} />
      </div>
    );
  }
}

export { EditorParagraph };
