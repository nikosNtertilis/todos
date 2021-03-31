import React, { useState, useEffect } from 'react'

const TodosList =() => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            const inputText= 1;
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos?${inputText}`
                );
            const json = await response.json();
            
            setTodos([...json]);
        }

        fetchTodos();
    }, [todos])

    return (
        <div>
            {todos.map(item => 
            <div key={item.id}>
                {item.title}
            </div> )}
        </div>
    )
}

export default TodosList;


