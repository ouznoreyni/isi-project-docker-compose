import React, { useEffect, useState } from "react";
import { Todo } from "../models/Todo";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../service/todoService";
import { TodoForm, TodoItem } from "./common";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  };

  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTodo = await createTodo({
        title: newTask,
        completed: false,
      });
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const handleToggleComplete = async (todo: Todo) => {
    const updatedTodo = await updateTodo(todo.id, {
      ...todo,
      completed: !todo.completed,
    });
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <TodoForm
            newTask={newTask}
            setNewTask={setNewTask}
            onCreateTodo={handleCreateTodo}
          />
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
