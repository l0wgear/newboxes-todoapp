import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { base32hex } from "rfc4648";

const AddForm = ({ onSubmit, onClose, addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("high");
  const [status, setStatus] = useState("planned");
  const [afterSubmit, setAfterSubmit] = useState(false);

  const formCallback = (e) => {
    e.preventDefault();
    // const title = e.target[1].value;
    // const description = e.target[2].value;
    // const dueDate = e.target[3].value;
    if (title) {
      const id = uuidv4();
      const base32 = base32hex.stringify(id).slice(0, -6).toLowerCase();

      addTodo({ title, description, priority, status, dueDate, id, base32 });
      onClose();
      //   setShowForm(false);
    } else {
      setAfterSubmit(true);
    }
  };

  return (
    <div className="absolute w-screen h-screen bg-slate-500 dark:bg-slate-200 left-0 top-0 bg-opacity-30 dark:bg-opacity-30 flex justify-center justify-items-stretch items-center">
      <form
        onSubmit={formCallback}
        className="flex flex-col bg-slate-100 dark:bg-slate-700 p-6 rounded-xl gap-3 w-[400px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Add todo</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 self-end bg-sky-600 rounded font-bold text-slate-200"
          >
            X
          </button>
        </div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className={`text-slate-700 p-1 rounded border-2 ${
            afterSubmit && !title && "border-rose-500"
          }`}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          className={`text-slate-700 p-1 rounded border-2`}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          id="priority"
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          className="text-slate-700 p-1 rounded border-2"
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          className="text-slate-700 p-1 rounded border-2"
        >
          <option value="planned">Planned</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <label htmlFor="due-date">Due Date</label>
        <input
          type="date"
          name="due-date"
          id="due-date"
          className="text-slate-700 p-1 rounded"
          onChange={(e) => {
            setDueDate(e.target.value);
          }}
          value={dueDate}
        />
        <button
          type="submit"
          className="p-1 bg-sky-600 rounded hover:bg-sky-500 active:bg-sky-700 text-slate-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
