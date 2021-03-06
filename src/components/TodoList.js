import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemoveClick, onEditClick }) => {
  return Object.keys(todos).length === 0 ? (
    <div className="py-3 px-3 flex flex-wrap justify-center items-center gap-4 h-screen">
      <p className="font-semibold text-2xl">No todos to show</p>
    </div>
  ) : (
    <div className="py-3 px-3 flex flex-wrap justify-start gap-4">
      {Object.keys(todos).map((key) => (
        <TodoItem
          item={todos[key]}
          key={todos[key].id}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
        />
      ))}
    </div>
  );
};

export default TodoList;
