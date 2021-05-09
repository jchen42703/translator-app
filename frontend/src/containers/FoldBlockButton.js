import React, { useState } from "react";
import "../styles/css/styles.css";
import foldSVG from "../media/fold-arrow.svg";
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
    <React.Fragment>
      <button
        className={fold ? "button-fold" : "button-no-fold"}
        onClick={handleClick}
      >
        <img src={foldSVG} height="50px" width="50px" alt="" />
      </button>
    </React.Fragment>
  );
};
