import React from 'react'
import { useState } from 'react'
import InpuTask from "../InputTask/InputTask"
import Todo from "../Todo/Todo"

import "./Todolist.scss"

const Todolist = () => {

    const [addTask, setAddTask] = useState([])

    const formSubmit = (e) => {
        e.preventDefault()
        const formInput = e.target
        const formData = new FormData(formInput)
        const label = formData.get("taskName")

        setAddTask((oldTask) => {
            const newTask = {label, isDone: false}
            return [...oldTask, newTask]
        })
    }

    const changeStatus = (index, currentStatus) => {

        setAddTask(oldTask => {
            const newTask = oldTask.concat([])
            newTask[index].isDone = !currentStatus
            return newTask;
        })
    }

  return (
    <div className='todolist'>
        <h1>TO DO LIST</h1>
        <form onSubmit={formSubmit}>
            <InpuTask  />
        </form>
        <ul>
            {
                addTask.map((item, index) => (
                    <Todo key={index} 
                    index={index} 
                    isDone={item.isDone} 
                    changeStatus={changeStatus}>
                        {item.label}
                    </Todo>
                ))
            }
        </ul>
    </div>
  )
}

export default Todolist