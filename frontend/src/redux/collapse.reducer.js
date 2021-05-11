/**
 * Handles the simulataneous collapsing and uncollapsing of paragraphs in both the editor and display.
 * @param {*} state The store state
 * @param {*} action the dispatched action (one of TOGGLE_ON, TOGGLE_OFF)
 * @returns the new state.
 */
function collapseReducer(state, action) {
  switch (action.type) {
    // adds the index of the collapsed paragarph to the global state
    case "TOGGLE_ON": {
      return {
        collapsedIdxList: [...state.collapsedIdxList, action.collapseIdx],
      };
    }

    // removes the index of the collapsed paragraph of the global state
    case "TOGGLE_OFF": {
      const filteredList = state.collapsedIdxList.filter(
        (item) => item !== action.uncollapseIdx
      );

      return {
        collapsedIdxList: filteredList,
      };
    }

    default: {
      return state;
    }
  }
}

export { collapseReducer };
