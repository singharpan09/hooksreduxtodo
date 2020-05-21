import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
  const todo = useSelector((state) => {
    return state;
  });
  console.log(todo);
  return (
    <React.Fragment>
      {todo.map((todo) => (
        <p>
          {todo.todo}
          <input type="checkbox" value={todo.complted} />
        </p>
      ))}
    </React.Fragment>
  );
};

export default Display;
