import React from "react";

const AddForm = ({ onSubmit, onClose }) => {
  return (
    <div className="absolute w-screen h-screen bg-white left-0 top-0 bg-opacity-30">
      <form onSubmit={onSubmit}>
        <button type="button" onClick={onClose}>
          X
        </button>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="due-date">Due Date</label>
        <input type="date" name="due-date" id="due-date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
