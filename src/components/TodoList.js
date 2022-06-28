import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default TodoList;
