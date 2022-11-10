import { render, fireEvent } from "@testing-library/react";
import Rating from "./Rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

test("rendering stars", () => {
  const { getAllByTestId } = render(
    <Rating rating={2} total={5}>
      {(isFilled) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            data-testid="star-button"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </Rating>
  );

  expect(getAllByTestId("star-button").length).toBe(5);
  expect(getAllByTestId("filled-star").length).toBe(2);
  expect(getAllByTestId("empty-star").length).toBe(3);
});

test("clicking on an empty star", () => {
  const onClick = jest.fn();

  const { getAllByTestId } = render(
    <Rating rating={1} total={5}>
      {(isFilled, starNumber) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              onClick(starNumber);
            }}
            data-testid="star-button"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </Rating>
  );

  const thirdStar = getAllByTestId("star-button")[2];
  fireEvent.click(thirdStar);

  expect(onClick).toHaveBeenCalledWith(3);
});

// TDD example
test("rendering without specifying the number of stars (no total prop)", () => {
  const { getAllByTestId } = render(
    <Rating rating={2}>
      {(isFilled) => {
        return (
          <button
            type="button"
            className="btn btn-link"
            data-testid="star-button"
          >
            <FontAwesomeIcon
              icon={faStar}
              color={isFilled ? "yellow" : "#ddd"}
              size="3x"
              data-testid={isFilled ? "filled-star" : "empty-star"}
            />
          </button>
        );
      }}
    </Rating>
  );

  expect(getAllByTestId("star-button").length).toBe(5);
});
