import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import { v4 as uuidv4 } from "uuid";
import { base32hex } from "rfc4648";

function App() {
  const id = uuidv4();
  const base32 = base32hex.stringify(id).slice(0, -6).toLowerCase();
  const testItem = {
    title: "test",
    description: "test description",
    dueDate: "2022-07-01",
    id,
    base32,
  };
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const formCallback = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const dueDate = e.target[2].value;
    const id = uuidv4();
    const base32 = base32hex.stringify(id).slice(0, -6).toLowerCase();

    addTodo({ title, description, dueDate, id, base32 });
    setShowForm(false);
  };

  const markDone = (id) => {
    const confirmRes = window.confirm("Mark todo as done and remove?");
    if (confirmRes) {
      const updatedTodos = todos.filter((item) => item.id != id);
      setTodos(updatedTodos);
    }
  };

  useEffect(() => {
    addTodo(testItem);
  }, []);

  return (
    <div className="App">
      <TodoList todos={todos} onBtnClick={markDone} />
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add Todo
      </button>
      {showForm && <AddForm onSubmit={formCallback} />}
    </div>
  );
}

export default App;
