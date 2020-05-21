import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { FormControl, InputGroup, Button } from "react-bootstrap";

const Form = () => {
  const [todo, settodo] = useState("");
  return (
    <React.Fragment>
      <h3>#Todos for the day</h3>
      <InputGroup className="mb">
        <FormControl
          required={true}
          placeholder="Enter Todos...."
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
      </InputGroup>
      <Button
        disabled={todo.length === 0 ? true : false}
        // onClick={() => {
        //   addtodo(todo);
        // }}
        variant="success"
      >
        Submit
      </Button>
    </React.Fragment>
  );
};

export default Form;
