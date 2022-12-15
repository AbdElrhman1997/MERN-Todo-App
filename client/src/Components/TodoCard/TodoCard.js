import React,{useRef, useState} from 'react'
import {MdEdit,MdEditOff,MdDelete} from 'react-icons/md';
import'./TodoCard.css';
import axios from 'axios';

const TodoCard = ({text,setTasks,tasks,task}) => {
    const [edit,setEdit]=useState(false);
    const [content,setContent]=useState(text);
    const bodyTodo=useRef();

    const handleDelete=(id)=> {
        axios.delete(`https://todo-app-y8d5.onrender.com/api/todos/${id}`)
        .then(setTasks(tasks))
        .catch(err=>console.log(err));
    }

    const handleEdit=async(task,body)=>{
        if(!task.isCompleted) {
            if(edit) {
                if(body) {
                    await axios.patch(`https://todo-app-y8d5.onrender.com/api/todos/${task._id}`,{body:body,isCompleted:task.isCompleted})
                    .then(setEdit(false))
                    .catch(err=>console.log(err));
                }
                else{
                    setEdit(false)
                }
            }
            else {
                setEdit(true);
            }
        }
    }
    const handleComplete=async (task,body)=>{
        if(task.isCompleted) {       
            await axios.patch(`https://todo-app-y8d5.onrender.com/api/todos/${task._id}`,{body:task.body,isCompleted:false})
            .then(bodyTodo.current.parentElement.classList.add('complete'))
            .catch(err=>console.log(err));
        }
        else {
            await axios.patch(`https://todo-app-y8d5.onrender.com/api/todos/${task._id}`,{body:body,isCompleted:true})
            .then(bodyTodo.current.parentElement.classList.remove('complete'))
            .catch(err=>console.log(err));
        }
    }

    return (
        <>
            {!edit?
                <p 
                    className='todo-text' 
                    ref={bodyTodo} 
                    onClick={()=>handleComplete(task,content)}
                >
                    {content?content:task.body}
                </p>:
                <textarea 
                    type='text' cols='25' 
                    onChange={(ele)=>{setContent(ele.target.value)}} 
                    className='editInput'
                >
                    {content?content:task.body}
                </textarea>
            }
            {!edit?
                <MdEdit 
                    className="edit-icon" 
                    onClick={()=>handleEdit(task,content)}
                />:
                <MdEditOff 
                    className="edit-icon" 
                    onClick={()=>handleEdit(task,content)}
                />
            }
            <MdDelete 
                className="delete-icon" 
                onClick={()=>handleDelete(task._id)}
            />
        </>
    )
}

export default TodoCard;
