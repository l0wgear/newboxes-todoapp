import React from "react";

const TodoItem = ({ item, onBtnClick }) => {
  const { title, description, dueDate, id } = item;
  return (
    <div>
      <h1>{title}</h1>
      <span className="due-date">{dueDate}</span>
      <p>{description}</p>
      <button
        onClick={() => {
          onBtnClick(id);
        }}
      >
        done
      </button>
    </div>
  );
};

export default TodoItem;
