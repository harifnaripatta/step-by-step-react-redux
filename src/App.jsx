import React from "react";
import PizzaBox from "./Components/PizzaBox";
import { Provider } from "react-redux";
import store from "./Components/redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <PizzaBox />
    </Provider>
  );
};

export default App;
