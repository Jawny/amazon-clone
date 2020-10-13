export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // logic for add to cart
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_CART":
      return { state };

    default:
      return state;
  }
}
export default reducer;
