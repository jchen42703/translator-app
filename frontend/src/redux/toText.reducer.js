function toTextReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return {
        toText: action.updatedText,
      };
    default:
      return state;
  }
}

export { toTextReducer };
