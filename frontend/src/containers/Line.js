import React from "react";
import { EditorBlock } from "draft-js";
import "../styles/css/components/Line.css";

class Line extends React.Component {
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

export { Line };
