import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onBtnClick }) => {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} onBtnClick={onBtnClick} />
      ))}
    </div>
  );
};

export default TodoList;
