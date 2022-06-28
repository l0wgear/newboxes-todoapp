import React from "react";

const TodoItem = ({ item }) => {
  const { title, description, dueDate } = item;
  return (
    <div>
      <h1>{title}</h1>
      <span className="due-date">{dueDate}</span>
      <p>{description}</p>
      <button>done</button>
    </div>
  );
};

export default TodoItem;
