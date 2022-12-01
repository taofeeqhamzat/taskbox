import { render, screen, MockedState } from "../../lib/util/util";

import TaskList from "./TaskList";

test("renders tasklist", () => {
  render(<TaskList />, MockedState);
  const tasklist = screen.getByTestId("success");
  expect(tasklist).toBeInTheDocument();
});

test("tasklist is visible", () => {
  render(<TaskList />, MockedState);
  const tasklist = screen.getByTestId("success");
  expect(tasklist).toBeVisible();
});

test("renders loading screen", () => {
  render(<TaskList />, {
    ...MockedState,
    status: "loading",
  });
  const loadingScreen = screen.getByTestId("loading");
  expect(loadingScreen).toBeInTheDocument();
});

test("loading screen is visible", () => {
  render(<TaskList />, {
    ...MockedState,
    status: "loading",
  });
  const loadingScreen = screen.getByTestId("loading");
  expect(loadingScreen).toBeVisible();
});

test("renders empty screen", () => {
  render(<TaskList />, {
    ...MockedState,
    tasks: [],
  });
  const emptyScreen = screen.getByTestId("empty");
  expect(emptyScreen).toBeInTheDocument();
});

test("empty screen is visible", () => {
  render(<TaskList />, {
    ...MockedState,
    tasks: [],
  });
  const emptyScreen = screen.getByTestId("empty");
  expect(emptyScreen).toBeVisible();
});