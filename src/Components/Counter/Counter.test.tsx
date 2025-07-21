import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit test", () => {
  test("check render of buttons", () => {
    render(<Counter></Counter>);

    const btnAumenta = screen.getByRole("button", { name: "+1" });
    expect(btnAumenta).toBeInTheDocument();

    const btnDiminui = screen.getByRole("button", { name: "-1" });
    expect(btnDiminui).toBeInTheDocument();

    const btnZerar = screen.getByRole("button", { name: "Zerar" });
    expect(btnZerar).toBeInTheDocument();
  });

  test("it shoud render counter in '0'", () => {
    render(<Counter></Counter>);

    const headingContador = screen.getByRole("heading", { level: 1 });

    expect(headingContador).toBeInTheDocument();
    expect(headingContador).toHaveTextContent("0");
  });

  it("should increasse counter value when button increase is clicked", async () => {
    render(<Counter></Counter>);

    //find espera um pouco mais antes de retornar o elemento
    const headingContador = await screen.findByRole("heading", { level: 1 });

    // ? usar queryByRole se o elemento pode retornar vazio
    const btnIncrease = screen.getByRole("button", { name: "+1" });

    userEvent.click(btnIncrease);

    expect(headingContador).toHaveTextContent(/^1$/);
  });
});

export {};
