import React, { useState } from 'react';
import TodoTable from './TodoTable';

export default function Todolist(props) {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  function deleteTodo(index) {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return(
    <div>
      <fieldset>
        <legend>Add Todo:</legend>
        <form onSubmit={addTodo}>
          Description: <input type="text"name="desc" value={todo.desc} onChange={inputChanged}/>
          Date: <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
          <input type= "submit" value="Add"/>
        </form>
      </fieldset>
      <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}