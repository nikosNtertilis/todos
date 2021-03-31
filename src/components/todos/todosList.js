import React, { useContext } from 'react'
import { todosContext } from '../todosContext';

const TodosList =() => {
    const { state:{ todosArr } } = useContext(todosContext);
    console.log(todosArr);
    return (
        <div>
            
        </div>
    )
}

export default TodosList;


