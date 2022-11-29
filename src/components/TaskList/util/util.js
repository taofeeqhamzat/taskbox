import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

import Task from "../../Task/Task";
import * as TaskStories from "../../Task/Task.stories";

// A super-simple mock of the state of the store
export const MockedState = {
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
  ],
  status: "idle",
  error: null,
};

// A super-simple mock of a redux store
export const Mockstore = ({ taskboxState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: createSlice({
          name: "taskbox",
          initialState: taskboxState,
          reducers: {
            updateTaskState: (state, action) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex((task) => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export const pinnedtasks = [
  ...MockedState.tasks.slice(1, 5),
  { id: "1", title: "Task 1 (pinned)", state: "TASK_PINNED" },
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

Mockstore.propTypes = {
  taskboxState: PropTypes.shape({
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    status: PropTypes.string,
    error: PropTypes.any
  })
};