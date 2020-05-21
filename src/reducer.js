import * as actions from "./actionTypes";

const initalState = [
  { id: 1, todo: "hello", completed: false },
  { id: 2, todo: "there", completed: true },
];

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.TODO_ADDED:
      return [
        ...state,
        {
          id: Date.now(),
          description: action.payload.description,
          completed: false,
        },
      ];

    case actions.TODO_COMPLETED:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : todo.completed === true
          ? { ...todo, completed: false }
          : { ...todo, completed: true }
      );
    default:
      return state;
  }
};

export default reducer;
