import React, { useState, useEffect, useContext } from 'react'
import TodosBox from '../todosBox';
import { todosContext } from '../todosProvider';
import './todosList.css'

const TodosList =() => {
 
    const {inputText, setInputText, todos, setTodos } = useContext(todosContext);
    // const inputText = '';
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
                <TodosBox item={item} key={item.id} />
            )}
        </div>
    )
}

export default TodosList;

