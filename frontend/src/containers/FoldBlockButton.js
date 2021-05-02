import React, { useState } from "react";
import "../styles/css/styles.css";
/**
 * Lies in the left gutter of the editor and display. When clicked,
 * it folds the paragraphs corresponding to its id in the editor and display.
 * @param {*} props should contain the key corresponding to the paragraph number
 */
export const FoldButton = (props) => {
  // Whether or not to fold the corresponding block
  const [fold, setFold] = useState(false);

  const handleClick = () => {
    setFold(!fold);
  };

  return (
    <button
      className={fold ? "button-fold" : "button-no-fold"}
      onClick={handleClick}
    ></button>
  );
};
