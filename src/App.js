import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";
import AddForm from "./components/AddForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

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
      const updatedTodos = todos.filter((item) => item.id !== id);
      setTodos(updatedTodos);
    }
  };

  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
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
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
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
    </GoogleOAuthProvider>
  );
}

export default App;
