import { useState } from "react";
import axios from 'axios';
import './TodoForm.css';

function TodoForm({todos,setTodos}) {
    const [input,setInput]=useState('');

    const handleChange=(e)=> {
        setInput(e.target.value);
    }

    const handleSubmit=(e)=> {
        if(!input|| /^\s*$/.test(input)) {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        
        axios.post('https://todo-app-y8d5.onrender.com/api/todos/',{body:input})
        .then((result)=>{
            setTodos([result.data.todos,...todos]);
        })
        .catch((err)=>{
            console.log(err);
        })
        setInput('');
        }
    
    return(
        <form className="todo-form" onSubmit={handleSubmit}> 
            <input 
            type='text' 
            placeholder="Add a todo" 
            value={input} 
            name='input' 
            className='todo-input'
            onChange={handleChange}/>
            <button className="todo-button">AddTask</button>
        </form>
    )
}

export default TodoForm;
