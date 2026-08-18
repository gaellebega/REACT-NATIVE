import { Dispatch, SetStateAction } from "react";
// import React from 'react'

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

function TodoTasks({ todos, setTodos }): Props {
  return (
    <div className='flex w-[90%] flex-wrap justify-evenly'>
      {/* mapping one task to many so that we get every task added on there
       */}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.todo}</li>
      ))}
    </div>
  );
}

export default TodoTasks
