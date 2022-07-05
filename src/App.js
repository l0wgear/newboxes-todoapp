import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import { useGoogleLogin } from "@react-oauth/google";
import { axios } from "axios";
import GoogleLogin from "./components/GoogleLogin";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || {}
  );
  const [showForm, setShowForm] = useState(false);
  const [toEdit, setToEdit] = useState(undefined);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, showForm]);

  const addTodo = (todo) => {
    const newTodos = todos;
    newTodos[todo.id] = todo;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const confirmRes = window.confirm("Mark todo as done and remove?");
    if (confirmRes) {
      setTodos((todos) => {
        let { [id]: _, ...updatedTodos } = todos;
        return updatedTodos;
      });
    }
  };

  const editTodo = (todoId) => {
    setToEdit(todos[todoId]);
    setShowForm(true);
  };

  const formClose = () => {
    setToEdit(undefined);
    setShowForm(false);
  };

  const clientID = process.env.REACT_APP_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div className="App relative flex flex-col antialiased text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-900 w-screen h-screen">
        <header className="min-h-6 w-screen py-5 px-3 bg-slate-800 flex items-center justify-end gap-4">
          <button
            className="h-[40px] px-3 bg-sky-600 rounded hover:bg-sky-500 active:bg-sky-700 text-slate-200"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add Todo
          </button>
          <GoogleLogin />
        </header>
        <TodoList
          todos={todos}
          onRemoveClick={removeTodo}
          onEditClick={editTodo}
        />
        {showForm && (
          <AddForm onClose={formClose} addTodo={addTodo} todo={toEdit} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
