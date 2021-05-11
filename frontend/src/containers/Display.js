import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FoldButton } from "./FoldButton";
import splitIntoParagraphs from "../utils/splitIntoParagraphs";

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
    const mustCollapse = collapsedIdxList.includes(props.paragraphNumber);
    // If yes, make sure it is collapsed. If no, make sure it is uncollapsed.
    setCollapse(mustCollapse);
  }, [collapsedIdxList, props.paragraphNumber, collapse]);

  return (
    <div className="line" data-line-number={props.lineNumber}>
      <div className="line-text">
        <div className="block">
          <FoldButton
            collapse={collapse}
            setCollapse={setCollapse}
          ></FoldButton>
          <div className={collapse ? "collapsedText" : "textBlock"}>
            <DisplayBlock text={props.text}></DisplayBlock>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Handles text changes.
 * @param {*} props
 * @returns
 */
export const Display = (props) => {
  const paragraphsList = splitIntoParagraphs(props.text);
  const blocksList = paragraphsList.map((textBlock, index) => {
    return (
      <DisplayParagraph
        text={textBlock}
        lineNumber={index + 1}
        key={index + 1}
      ></DisplayParagraph>
    );
  });
  return <div>{blocksList}</div>;
};
