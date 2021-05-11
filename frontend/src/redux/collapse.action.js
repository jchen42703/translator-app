/**
 * This action controls the simultaneous collapsing off paragraphs for both the editor and display.
 * @param {int} payload the index of the paragraphs (in both the editor and the display) to collapse
 * @returns an action of type TOGGLE_ON
 */
const collapseToggleOn = (payload) => {
  return { type: "TOGGLE_ON", pIdx: payload };
};

/**
 * This action controls the simultaneous uncollapsing off paragraphs for both the editor and display.
 * @param {int} payload the index of the paragraphs (in both the editor and the display) to uncollapse
 * @returns an action of type TOGGLE_ON
 */
const collapseToggleOff = (payload) => {
  return { type: "TOGGLE_OFF", pIdx: payload };
};

export { collapseToggleOn, collapseToggleOff };
