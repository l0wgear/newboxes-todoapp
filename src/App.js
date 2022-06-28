import "./App.css";
import TodoList from "./components/TodoList";
import React, { useState } from "react";

function App() {
  const testItem = {
    title: "test",
    description: "test description",
    dueDate: "2022-07-01",
  };
  const [todos, setTodos] = useState([testItem]);
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
