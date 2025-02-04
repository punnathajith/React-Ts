import { useState } from "react";
import './App.css';


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [warning, setWarning] = useState<string>("");

  const addOrEditTodo = (): void => {
    if (task.trim() === "") {
      setWarning("Task cannot be empty!");
      return;
    }
    setWarning("");

    if (editId !== null) {
      // Edit existing todo
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: task } : todo
        )
      );
      setEditId(null);
    } else {
      // Add new todo
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  const toggleComplete = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string): void => {
    setTask(text);
    setEditId(id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        
        {warning && (
          <p className="text-red-500 text-sm text-center mb-2">{warning}</p>
        )}

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={addOrEditTodo}
            className={`px-4 py-2 rounded-r-lg text-white ${
              editId !== null ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editId !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-2 rounded-lg ${
                todo.completed ? "bg-green-100" : "bg-gray-200"
              }`}
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer flex-1 ${
                  todo.completed ? "line-through text-green-500" : ""
                }`}
              >
                {todo.text}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => editTodo(todo.id, todo.text)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
