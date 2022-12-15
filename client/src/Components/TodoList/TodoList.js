import React, { useCallback, useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import axios from 'axios';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://todo-app-y8d5.onrender.com/api/todos/')
        .then((result) => {
            setTodos([...result.data.todos]);
        })
        .catch((err) => {
            console.log(err);
        })
    })


    return (
        <section className="todo-list">
            <h1>What is the Plan for Today</h1>
            <TodoForm tasks={todos} setTasks={setTodos} />
            {todos.length ? <Todo tasks={todos} setTasks={setTodos} /> : <p className="emptyTodoTxt">There is no item to show</p>}
        </section>
    )
}

export default TodoList;
