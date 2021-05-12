import * as actions from "../collapse.action.js";

describe("Testing actions", () => {
  test("should create an action to toggle on collapse button", () => {
    const idx = 0;
    const expectedAction = {
      type: "TOGGLE_ON",
      collapseIdx: idx,
    };
    expect(actions.collapseToggleOn(idx)).toEqual(expectedAction);
  });

  test("should create an action to toggle off collapse button", () => {
    const idx = 0;
    const expectedAction = {
      type: "TOGGLE_OFF",
      uncollapseIdx: idx,
    };
    expect(actions.collapseToggleOff(idx)).toEqual(expectedAction);
  });
});
