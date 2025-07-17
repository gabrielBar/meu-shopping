import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./styles/GloabalStyles";
import { Header } from "./Components/Header/Header";
import { ProductCard } from "./Components/ProductCard/ProductCard";
import { ProductList } from "./Components/ProductList/ProductList";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const Title = styled.h1`
  font-size: 2rem;
  color: blue;
  font-weight: 100;
`;
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles></GlobalStyles>
      <div className="App">
        <Header />

        <ProductList></ProductList>
      </div>
    </Provider>
  );
}

export default App;
