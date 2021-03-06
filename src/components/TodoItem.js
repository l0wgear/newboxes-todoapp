import React from "react";
import Overdue from "./Overdue";
import PriorityStatus from "./PriorityStatus";

const TodoItem = ({ item, onRemoveClick, onEditClick }) => {
  const { title, description, dueDate, id, priority, status } = item;
  const dueDateObject = new Date(dueDate);
  const today = new Date();
  const overdue = dueDateObject - today < 0;

  return (
    <div className="rounded-lg p-4 bg-slate-300 dark:bg-slate-800 flex flex-col justify-between gap-1 h-fit w-fit min-w-[10rem] max-w-[15rem] min-h-[11.2rem]">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <PriorityStatus priority={priority} status={status} />
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
      <p className="flex-1 my-1">{description}</p>

      <div className="grid grid-rows-1 grid-cols-2 gap-1">
        <button
          className="p-1 bg-rose-700 justify-self-end rounded hover:bg-rose-600 active:bg-rose-800 text-slate-200 w-full"
          onClick={() => {
            onRemoveClick(id);
          }}
        >
          remove
        </button>
        <button
          className="p-1 bg-sky-600 justify-self-end rounded hover:bg-sky-500 active:bg-sky-700 text-slate-200 w-full"
          onClick={() => {
            onEditClick(id);
          }}
        >
          edit
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
