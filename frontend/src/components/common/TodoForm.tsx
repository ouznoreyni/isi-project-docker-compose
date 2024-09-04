import React from "react";

interface TodoFormProps {
  newTask: string;
  setNewTask: (task: string) => void;
  onCreateTodo: (e: React.FormEvent) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  newTask,
  setNewTask,
  onCreateTodo,
}) => {
  return (
    <form onSubmit={onCreateTodo} className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add Todo"
      />
      <button
        type="submit"
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
