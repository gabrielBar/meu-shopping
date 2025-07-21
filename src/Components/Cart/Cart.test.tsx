import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { IProduto, produtos as produtosBanco } from "../../Data/Products";
import exp from "constants";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
import { removeProduto } from "../../Redux/CartReducer/cart-slice";

const mockDispatch = jest.fn(); //simula uma função falsa
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > unit tests", () => {
  it("should render an empty cart", () => {
    const produtos: IProduto[] = [];

    render(
      <Cart
        showCart={true}
        produtos={produtos}
        onToggle={() => {
          return false;
        }}
      ></Cart>
    );

    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement).toHaveTextContent("Carrinho");

    const totalElement = screen.getByTestId("totalizador");
    expect(totalElement).toHaveTextContent("$ 0.00");

    const listProductElement = screen.getByRole("list");
    expect(listProductElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products.", () => {
    const produtos: IProduto[] = produtosBanco.slice(0, 2);

    render(
      <Cart
        showCart={true}
        produtos={produtos}
        onToggle={() => {
          return false;
        }}
      ></Cart>
    );

    const listProductItemElements = screen.getAllByRole("listitem");

    expect(listProductItemElements.length).toBe(2);
  });

  it("should remove product when remove button is clicked", () => {
    const produtos: IProduto[] = produtosBanco.slice(0, 1);

    render(
      <Cart
        showCart={true}
        produtos={produtos}
        onToggle={() => {
          return false;
        }}
      ></Cart>
    );

    const btnDelete = screen.getByTestId(`btn-remove-${produtos[0].id}`);
    userEvent.click(btnDelete);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduto(produtos[0]));
  });
});
