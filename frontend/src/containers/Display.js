import React from "react";
import { DisplayParagraph } from "./DisplayParagraph";
import splitIntoParagraphs from "../utils/splitIntoParagraphs";

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
