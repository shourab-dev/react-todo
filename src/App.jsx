import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodoText, setNewTodoText] = useState("");

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = {
        text: newTodoText,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="Enter new todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
