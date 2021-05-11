import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
  // Takes the global store pIdxList and makes every EditorParagraph have it as a prop.
  const collapsedIdxList = useSelector((state) => state.collapsedIdxList);

  const { block, contentState } = props;
  const paragraphNumber =
    contentState
      .getBlockMap()
      .toList()
      .findIndex((item) => item.key === block.key) + 1;

  useEffect(() => {
    // Is paragraphNumber in list?
    const mustCollapse = collapsedIdxList.includes(paragraphNumber);
    // If yes, make sure it is collapsed. If no, make sure it is uncollapsed.
    setCollapse(mustCollapse);
  }, [collapsedIdxList, paragraphNumber, collapse]);

  return (
    <div className="line" data-line-number={paragraphNumber}>
      <div className="line-text">
        <div className="block">
          <FoldButton
            collapse={collapse}
            setCollapse={setCollapse}
            paragraphNumber={paragraphNumber}
          ></FoldButton>
          <div className={collapse ? "collapsedText" : "textBlock"}>
            <EditorBlock {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorParagraph;
