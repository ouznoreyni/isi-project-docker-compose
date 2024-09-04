import React from "react";
import { Todo } from "../../models/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div className="flex mb-4 items-center">
      <p
        className={`w-full ${
          todo.completed ? "line-through text-green" : "text-grey-darkest"
        }`}
      >
        {todo.title}
      </p>
      <button
        onClick={() => onToggleComplete(todo)}
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
          todo.completed
            ? "text-grey border-grey hover:bg-grey"
            : "text-green border-green hover:bg-green"
        }`}
      >
        {todo.completed ? "Not Done" : "Done"}
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
