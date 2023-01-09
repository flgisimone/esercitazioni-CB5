import React from 'react'
import "./Todo.scss"

const Todo = (props) => {
  const {children, isDone, changeStatus, index} = props;

  const updateTask = () =>{
    changeStatus (index, isDone)
  }

  return (
    <li>
      {isDone ? "✅" : "❌"}
      <span>{children}</span>
      <button onClick={updateTask}>{isDone ? "Non fatto" : "Fatto"}</button>
    </li>
  )
}

export default Todo