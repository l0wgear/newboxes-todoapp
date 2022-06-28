import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const markDone = (id) => {
    const confirmRes = window.confirm("Mark todo as done and remove?");
    if (confirmRes) {
      const updatedTodos = todos.filter((item) => item.id != id);
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="App relative flex flex-col antialiased text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 w-screen h-screen">
      <header className="min-h-6 w-screen py-5 px-3 bg-slate-800">
        <button
          className="p-3 dark:bg-sky-600 rounded hover:dark:bg-sky-500 active:dark:bg-sky-700"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add Todo
        </button>
      </header>
      <TodoList todos={todos} onBtnClick={markDone} />
      {showForm && (
        <AddForm
          onClose={() => {
            setShowForm(false);
          }}
          addTodo={addTodo}
        />
      )}
    </div>
  );
}

export default App;
