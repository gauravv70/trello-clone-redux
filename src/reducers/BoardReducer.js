import { initialState } from "./initialState";

const BoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      state.push(action.data);
      return state;
    case "REMOVE_CARD":
      state.splice(action.data.index, 1);
      return state;
    case "UPDATE_TITLE":
      state.forEach((card, index, arr) => {
        if (card.cardId === action.data.id) {
          arr[index].title = action.data.value;
        }
      });
      return state;
    case "UPDATE_DESCRIPTION":
      state.forEach((card, index, arr) => {
        if (card.cardId === action.data.id) {
          arr[index].description = action.data.value;
        }
      });
      return state;
    default:
      return state;
  }
};

export default BoardReducer;
