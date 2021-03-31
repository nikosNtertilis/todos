import React, { useState, useEffect } from 'react'
import TodosBox from '../todosBox';
import './todosList.css'

const TodosList =() => {
    const [todos, setTodos] = useState([])


    const inputText = '';


    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos?${inputText}`
                );
            const json = await response.json();

            setTodos([...json]);
        }

        fetchTodos();
    }, [todos])

    return (
        <div className="todosList" id="todosList" >
            {todos.map(item => 
                //todo: css flex box
                <TodosBox item={item} key={item.id} />
            )}
        </div>
    )
}

export default TodosList;

