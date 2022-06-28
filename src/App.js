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
    const title = e.target[1].value;
    const description = e.target[2].value;
    const dueDate = e.target[3].value;
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
    <div className="App relative flex antialiased text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 w-screen h-screen">
      <div className="min-w-12 h-screen py-6 px-3">
        <button
          className="p-3 dark:bg-sky-600 rounded hover:dark:bg-sky-500 active:dark:bg-sky-700"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add Todo
        </button>
      </div>
      <TodoList todos={todos} onBtnClick={markDone} />
      {showForm && (
        <AddForm
          onSubmit={formCallback}
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
