import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { base32hex } from "rfc4648";

const AddForm = ({ onSubmit, onClose, addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [afterSubmit, setAfterSubmit] = useState(false);

  const formCallback = (e) => {
    e.preventDefault();
    // const title = e.target[1].value;
    // const description = e.target[2].value;
    // const dueDate = e.target[3].value;
    if (title) {
      const id = uuidv4();
      const base32 = base32hex.stringify(id).slice(0, -6).toLowerCase();

      addTodo({ title, description, dueDate, id, base32 });
      onClose();
      //   setShowForm(false);
    } else {
      setAfterSubmit(true);
    }
  };

  return (
    <div className="absolute w-screen h-screen bg-slate-200 left-0 top-0 bg-opacity-30 flex justify-center justify-items-stretch items-center">
      <form
        onSubmit={formCallback}
        className="flex flex-col dark:bg-slate-700 p-6 rounded-xl gap-3 w-[400px]"
      >
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 self-end bg-sky-600 rounded font-bold"
        >
          X
        </button>
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
          className="p-1 dark:bg-sky-600 rounded hover:dark:bg-sky-500 active:dark:bg-sky-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
