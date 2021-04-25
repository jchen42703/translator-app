// Overengineered because this only passaes the unchanged state.toText from the editor to the display
// REFACTOR IF THIS STRUCTURE IS NOT NEEDED
const toTextUpdate = (payload) => {
  return { type: "UPDATE", updatedText: payload };
};

export { toTextUpdate };
