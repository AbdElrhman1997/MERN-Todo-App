import React, { useEffect, useRef } from "react";
import TodoCard from "../TodoCard/TodoCard";
import './Todo.css';

function Todo({setTasks,tasks}) {    
    const d =useRef();
    useEffect(()=>{
        tasks.map((task,index) => {
            return task.isCompleted?document.querySelectorAll('.todo-row')[index].classList.add('complete'):document.querySelectorAll('.todo-row')[index].classList.remove('complete');
        });
    })

    return(
        <div className="todo">
                <div>
                    {
                        tasks.map(
                            (e)=> {
                                return (
                                    <p ref={d} className="todo-row" key={e._id}>
                                        <TodoCard 
                                            tasks={tasks}
                                            setTasks={setTasks} 
                                            text={e.body}
                                            task={e}
                                        />
                                    </p>
                                )
                            }
                        )
                    }
                </div>
        </div>
    )
}

export default Todo;