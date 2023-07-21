const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
  return (
    <div
      className={todo.isCompleted ? "todo done" : "todo"}
      
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)} className="completeBtn">
          Complete
        </button>
        <button onClick={() => deleteTodo(index)} className="deleteBtn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
