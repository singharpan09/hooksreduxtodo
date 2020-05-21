import * as actions from "./actionTypes";

export const todoAdded = (todo) => {
  return {
    type: actions.TODO_ADDED,
    payload: {
      todo: todo,
    },
  };
};

export const todoCompleted = (todo) => {
  return {
    type: actions.TODO_COMPLETED,
    payload: {
      id: todo.id,
      todo: todo.todo,
      completed: todo.completed,
    },
  };
};
