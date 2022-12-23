import "./Todolist.scss"
import { useState } from "react";
//import { Button } from "../../atoms/_button/Button"
import { Status } from "../../atoms/_status/Status.jsx"

function SingleTask(task){
    const [isDone, setDone] = useState(true);

    return(
    <li className="task">
    <h5>{task}</h5>
    <button className="btnDone" onClick={() => setDone("Fatto!")}>✅</button>
    {/*<Button onClick={() => setDone("done")}>✅</Button>*/}
    <Status>{isDone}</Status>
    </li>
)
}

export const Todolist = () =>{

    const itemTodo = [
        {label: "Task 1", id: 1},
        {label: "Task 2", id: 2},
        {label: "Task 3", id: 3},
        {label: "Task 4", id: 4},
        {label: "Task 5", id: 5},
        {label: "Task 6", id: 6}
    ]

    return(
        <section className="todolist">
            <div className="containerTodolist">
                <ul className="ulTodolist">
                    {
                        itemTodo.map(function(itemTodo){
                            return (
                                SingleTask(itemTodo.label)
                            )
                        })
                    }
                    
                </ul>
            </div>
        </section>
    )

}