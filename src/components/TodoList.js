import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onBtnClick }) => {
  return todos.length === 0 ? (
    <div className="py-3 px-3 flex flex-wrap justify-center items-center gap-4 h-screen">
      <p className="font-semibold text-2xl">No todos to show</p>
    </div>
  ) : (
    <div className="py-3 px-3 flex flex-wrap justify-start gap-4">
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} onBtnClick={onBtnClick} />
      ))}
    </div>
  );
};

export default TodoList;
