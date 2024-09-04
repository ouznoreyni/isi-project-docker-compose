import React from "react";
import { Todo } from "../../models/Todo";

interface TodoStatsProps {
  todos: Todo[];
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded mb-4">
      <span>Total tasks: {totalTodos}</span>
      <span>Completed: {completedTodos}</span>
      <span>Remaining: {totalTodos - completedTodos}</span>
    </div>
  );
};

export default TodoStats;
