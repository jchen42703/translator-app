import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FoldButton } from "./FoldButton";

/**
 * Component that displays the actual text.
 * @param {*} props expects text (with no new lines) and key
 * @returns
 */
export const DisplayBlock = (props) => {
  return (
    <React.Fragment>
      <span>{props.text}</span>
      <br></br>
    </React.Fragment>
  );
};

/**
 * Component that renders the toggle button and the text.
 * @param {*} props expects a full text with newlines to be divided up into blocks
 * @returns an unordered list of DisplayBlocks to render
 */
export const DisplayParagraph = (props) => {
  const [collapse, setCollapse] = useState(false);
  // Takes the global store pIdxList and makes every DisplayParagraph have it as a prop.
  const collapsedIdxList = useSelector((state) => state.collapsedIdxList);

  useEffect(() => {
    // Is paragraphNumber in list?
    const mustCollapse = collapsedIdxList.includes(props.lineNumber);
    // If yes, make sure it is collapsed. If no, make sure it is uncollapsed.
    setCollapse(mustCollapse);
  }, [collapsedIdxList, props.lineNumber, collapse]);

  return (
    <div className="line" data-line-number={props.lineNumber}>
      <div className="line-text">
        <div className="block">
          <FoldButton
            collapse={collapse}
            setCollapse={setCollapse}
            paragraphNumber={props.lineNumber}
          ></FoldButton>
          <div className={collapse ? "collapsedText" : "textBlock"}>
            <DisplayBlock text={props.text}></DisplayBlock>
          </div>
        </div>
      </div>
    </div>
  );
};