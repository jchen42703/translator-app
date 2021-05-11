import React from "react";
import "../styles/css/styles.css";

/**
 * Lies in the left gutter of the editor and display. When clicked,
 * it folds the paragraphs corresponding to its id in the editor and display.
 *
 * When the paragraph is collapsed, you cannot edit the contents of the corresponding paragraph.
 * @param {*} props should contain the key corresponding to the paragraph number
 */
export const FoldButton = (props) => {
  const handleClick = () => {
    props.setCollapse(!props.collapse);
  };

  return (
    <div
      className="rotate-button-wrapper"
      contentEditable={!props.collapse}
      suppressContentEditableWarning={true}
    >
      <button
        className={props.collapse ? "button-fold" : "button-no-fold"}
        onClick={handleClick}
      ></button>
    </div>
  );
};
