import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import TodoTasks from './TodoTasks';

// homework

// delete funkcija
// skaam toa todo da se izbrishe pri klik na x kopceto.
// edit -- vrednosta na inputott da e napolneta so momentalnta vrednost
// na primer ako stisnam edit na test --> inputut ne treba da e prazen string tuku "test" i od tuka ke mozam
// da editiram

// koga editiram ne sakam da se prikazuva todo forma

// koga ke se shtiklira checkmark, sakam da mi se prikazat najdole i inputot da e vo zelna boja.

const TodoList = () => {
  // glbalna vrednost
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(true);

  const addTodo = (value) => {
    const filteredTodos = todos.filter((todo) => todo.title !== value.title);
    setTodos([value, ...filteredTodos]);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)));
  };

  const handleToggleHideInput = () => {
    setShow(!show);
  };

  return (
    <div>
      {show && <ToDoForm handleAddTodo={addTodo} />}

      <TodoTasks
        handleToggleHideInput={handleToggleHideInput}
        todos={todos}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
