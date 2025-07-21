import React from "react";
import { GlobalStyles } from "./styles/GloabalStyles";
import { Header } from "./Components/Header/Header";
import { ProductList } from "./Components/ProductList/ProductList";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Counter } from "./Components/Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles></GlobalStyles>
      <div className="App">
        <Header />

        <Counter></Counter>
        <ProductList></ProductList>
      </div>
    </Provider>
  );
}

export default App;
