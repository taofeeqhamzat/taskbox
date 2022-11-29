import { render, screen } from "@testing-library/react";

import { Mockstore, MockedState } from "./util/util";

import TaskList from "./TaskList";

test("renders tasklist", () => {
  render(
    <Mockstore taskboxState={MockedState}>
      <TaskList />
    </Mockstore>
  );
  const tasklist = screen.getByTestId("success");
  expect(tasklist).toBeInTheDocument();
});

test("tasklist is visible", () => {
  render(
    <Mockstore taskboxState={MockedState}>
      <TaskList />
    </Mockstore>
  );
  const tasklist = screen.getByTestId("success");
  expect(tasklist).toBeVisible();
});

test("renders loading screen", () => {
  render(
    <Mockstore
      taskboxState={{
        ...MockedState,
        status: "loading",
      }}
    >
      <TaskList />
    </Mockstore>
  );
  const loadingScreen = screen.getByTestId("loading");
  expect(loadingScreen).toBeInTheDocument();
});

test("loading screen is visible", () => {
  render(
    <Mockstore
      taskboxState={{
        ...MockedState,
        status: "loading",
      }}
    >
      <TaskList />
    </Mockstore>
  );
  const loadingScreen = screen.getByTestId("loading");
  expect(loadingScreen).toBeVisible();
});

test("renders empty screen", () => {
  render(
    <Mockstore
      taskboxState={{
        ...MockedState,
        tasks: [],
      }}
    >
      <TaskList />
    </Mockstore>
  );
  const emptyScreen = screen.getByTestId("empty");
  expect(emptyScreen).toBeInTheDocument();
});

test("empty screen is visible", () => {
  render(
    <Mockstore
      taskboxState={{
        ...MockedState,
        tasks: [],
      }}
    >
      <TaskList />
    </Mockstore>
  );
  const emptyScreen = screen.getByTestId("empty");
  expect(emptyScreen).toBeVisible();
});