import React from "react";
import { EditorBlock } from "draft-js";
import "../styles/css/styles.css";

/**
 * Represents a paragraph in the editor. Each paragraph is separated by a single new line.
 */
class EditorParagraph extends React.Component {
  render() {
    const { block, contentState } = this.props;
    const lineNumber =
      contentState
        .getBlockMap()
        .toList()
        .findIndex((item) => item.key === block.key) + 1;
    return (
      <div className="line" data-line-number={lineNumber}>
        <div className="line-text">
          <EditorBlock {...this.props} />
        </div>
      </div>
    );
  }
}

export { EditorParagraph };
