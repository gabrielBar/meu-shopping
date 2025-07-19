import { createSlice } from "@reduxjs/toolkit";
import { IProduto } from "../../Data/Products";
import { stat } from "fs";
import { act } from "react";

export interface ICartState {
  cart: IProduto[];
}

interface ICartAction {
  type: string;
  payload: IProduto;
}

const initialState: ICartState = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduto: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduto: (state, action) => {
      debugger;
      const produtoParaRemover: IProduto = action.payload;

      console.log("produtoParaRemover : ", produtoParaRemover);
      state.cart = state.cart.filter(
        (item) => item.id !== produtoParaRemover.id
      );
      console.log("cart : ", state.cart);
    },
  },
});

export const { addProduto, removeProduto } = cartSlice.actions;
