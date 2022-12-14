import React from 'react';

export default function TodoTable(props) {

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
            props.todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td><button onClick={()=> props.deleteTodo(index)}>Delete</button></td>
              </tr>
              )
              }
          </tbody>
      </table>
    </div>
  );
}