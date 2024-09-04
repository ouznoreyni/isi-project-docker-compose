import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Todo } from "../models/Todo";
import { getTodoById, updateTodo } from "../service/todoService";

const TodoDetails: React.FC = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchTodo(parseInt(id));
    }
  }, [id]);

  const fetchTodo = async (todoId: number) => {
    const fetchedTodo = await getTodoById(todoId);
    setTodo(fetchedTodo);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      await updateTodo(todo.id, todo);
      navigate("/");
    }
  };

  if (!todo) return <div>Chargement...</div>;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">Détails de la tâche</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Mettre à jour
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => navigate("/")}
          >
            Retour
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoDetails;
