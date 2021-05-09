import React from "react";
import { splitIntoParagraphs } from "../utils/splitIntoParagraphs";

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
  return (
    <div className="line" data-line-number={props.lineNumber}>
      <div className="line-text">
        <DisplayBlock text={props.text}></DisplayBlock>
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
  return <ul>{blocksList}</ul>;
};
