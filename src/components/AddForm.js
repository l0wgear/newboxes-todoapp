import React from "react";

const AddForm = ({ onSubmit, onClose }) => {
  return (
    <div className="absolute w-screen h-screen bg-slate-200 left-0 top-0 bg-opacity-30 flex justify-center justify-items-stretch items-center">
      <form
        onSubmit={onSubmit}
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
          className="text-slate-700 p-1"
        />
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          className="text-slate-700 p-1"
        />
        <label htmlFor="due-date">Due Date</label>
        <input
          type="date"
          name="due-date"
          id="due-date"
          className="text-slate-700 p-1"
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
