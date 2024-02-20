import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

// fetch("http://localhost:3000/todos").then(async (res) => {
//   const json = await res.json();
//   setTodos(json.todos);
// });

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
