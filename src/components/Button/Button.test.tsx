import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button", () => {
  it("should render the component", () => {
    const testId = "testId";

    const { getByTestId } = screen;
    render(<Button data-testid={testId} text="Button" />);

    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it("should render outline variant", () => {
    const testId = "testId";

    const { getByTestId, debug } = screen;
    render(
      <Button data-testid={testId} variant="outline" text="Button" />
    );

    debug();

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveClass("btn_base variant_outline");
  });
});
