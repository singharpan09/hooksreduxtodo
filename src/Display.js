import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Badge } from "react-bootstrap";
import { todoCompleted } from "./actions";
const Display = () => {
  const todo = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {todo.map((todo) => (
        <p>
          {todo.todo}
          <input
            type="checkbox"
            value={todo.complted}
            onChange={() => dispatch(todoCompleted(todo))}
          />
          {todo.completed === true && (
            <Badge variant="secondary">completed</Badge>
          )}
        </p>
      ))}
    </React.Fragment>
  );
};

export default Display;
