import React from "react";

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
