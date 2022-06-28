import React from "react";

const AddForm = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
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
