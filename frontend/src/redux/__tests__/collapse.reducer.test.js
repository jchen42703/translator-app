import { collapseReducer } from "../collapse.reducer";

const initialState = {
  collapsedIdxList: [],
};

describe("collapse reducer handling the collapse action", () => {
  it("Should return the initial state", () => {
    expect(collapseReducer(initialState, {})).toEqual({
      collapsedIdxList: [],
    });
  });

  it("Should handle the initial collapse", () => {
    expect(
      collapseReducer(initialState, {
        type: "TOGGLE_ON",
        collapseIdx: 1,
      })
    ).toEqual({
      collapsedIdxList: [1],
    });
  });

  it("Should handle collapsing when there are existing collapsed buttons", () => {
    expect(
      collapseReducer(
        {
          collapsedIdxList: [1, 2, 3],
        },
        {
          type: "TOGGLE_ON",
          collapseIdx: 4,
        }
      )
    ).toEqual({
      collapsedIdxList: [1, 2, 3, 4],
    });
  });
});

describe("Collapse reducer handling the uncollapse action", () => {
  it("Should handle uncollapsing from an empty state (just in case)", () => {
    // Nothing should happen to the state
    expect(
      collapseReducer(initialState, {
        type: "TOGGLE_OFF",
        uncollapseIdx: 1,
      })
    ).toEqual({
      collapsedIdxList: [],
    });
  });

  it("Should handle uncollapsing when there are existing collapsed buttons", () => {
    expect(
      collapseReducer(
        {
          collapsedIdxList: [1, 2, 3],
        },
        {
          type: "TOGGLE_OFF",
          uncollapseIdx: 3,
        }
      )
    ).toEqual({
      collapsedIdxList: [1, 2],
    });
  });
});
