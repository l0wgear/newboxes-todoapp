import React from "react";
import Overdue from "./Overdue";

const TodoItem = ({ item, onBtnClick }) => {
  const { title, description, dueDate, id } = item;
  const dueDateObject = new Date(dueDate);
  const today = new Date();
  const overdue = dueDateObject - today < 0;
  return (
    <div className="rounded-lg p-4 dark:bg-slate-800 flex flex-col gap-3 h-fit w-fit">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      {dueDate !== "" && (
        <span className="due-date flex items-baseline">
          {dueDateObject.toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
          {overdue && <Overdue />}
        </span>
      )}
      <p>{description}</p>
      <button
        className="p-1 dark:bg-sky-600 justify-self-end rounded hover:dark:bg-sky-500 active:dark:bg-sky-700"
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
