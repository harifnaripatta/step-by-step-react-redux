import { ORDER_PIZZA } from "./PizzaTypes";
const initailState = {
  pizzaBase: 1000,
};

const pizzaReducer = (state = initailState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
