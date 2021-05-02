import React from "react";
import { DisplayBlock } from "./DisplayBlock";
import { uuid } from "../utils/uuid";
/**
 * Component that renders the toggle button and the text.
 * @param {*} props expects a full text with newlines to be divided up into blocks
 * @returns an unordered list of DisplayBlocks to render
 */
export const DisplayLine = (props) => {
  const paragraphsList = props.text.split(/\r?\n/);
  const blocksList = paragraphsList.map((textBlock) => {
    return <DisplayBlock text={textBlock} key={uuid()}></DisplayBlock>;
  });
  return <ul>{blocksList}</ul>;
};
