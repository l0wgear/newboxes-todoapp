import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onBtnClick }) => {
  return (
    <div className="py-3 px-3 flex flex-wrap justify-start gap-4">
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} onBtnClick={onBtnClick} />
      ))}
    </div>
  );
};

export default TodoList;
