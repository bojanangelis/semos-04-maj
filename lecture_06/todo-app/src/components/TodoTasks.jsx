import { CheckIcon, PencilIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import ToDoForm from './ToDoForm';

const TodoTasks = ({ todos, updateTodo, handleToggleHideInput }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: ''
  });

  console.log('editInput-->', editInput);

  const submitUpdate = (value) => {
    updateTodo(editInput.id, value);
    handleToggleHideInput();
  };

  const handleEditButton = (todo) => {
    setEditInput({
      id: todo.id,
      text: todo.title
    });
    handleToggleHideInput();
  };

  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === editInput.id)
          return <ToDoForm handleAddTodo={submitUpdate} key={todo.id} editForm />;

        return (
          <div
            key={todo.id}
            className="mt-4 flex items-center justify-between bg-green-200 p-2 rounded-md"
          >
            <span>{todo.title}</span>
            <div className="space-x-2">
              <button className="bg-green-400 p-1 rounded-md">
                <CheckIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => handleEditButton(todo)}
                className="bg-orange-400 p-1 rounded-md"
              >
                <PencilIcon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoTasks;
