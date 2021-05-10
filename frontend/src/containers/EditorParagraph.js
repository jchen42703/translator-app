import React, { useState } from "react";
import { EditorBlock } from "draft-js";
import { FoldButton } from "./FoldBlockButton";
import "../styles/css/styles.css";

/**
 * Represents a paragraph in the editor with the gutter (fold buttons). Each paragraph is separated by a single new line.
 * Note: EditorBlock is contains the true text of the paragraph.
 *
 * Toggling the button collapses the EditorBlock
 */
const EditorParagraph = (props) => {
  // whether or not to collapse the block
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="block">
      <FoldButton collapse={collapse} setCollapse={setCollapse}></FoldButton>
      <div className={collapse ? "collapsedText" : "textBlock"}>
        <EditorBlock {...props} />
      </div>
    </div>
  );
};

export { EditorParagraph };
