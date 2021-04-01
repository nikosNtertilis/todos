import React, { useState, useEffect, useContext } from 'react'
import TodosBox from '../todosBox';
import { todosContext } from '../todosProvider';
import './todosList.css'

const TodosList =() => {
 
    const {inputText, setInputText, todos, setTodos } = useContext(todosContext);
    
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos`
                );
            const json = await response.json();
            setTodos([...json]);
        }
        
        fetchTodos();
    }, [todos])

    
    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    
    return (
        <div className="todosList" id="todosList" >
            {filterItems(todos, inputText).map(item => 
                <TodosBox item={item} key={item.id} />
            )}
        </div>
    )
}

export default TodosList;

