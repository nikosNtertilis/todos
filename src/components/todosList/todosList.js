import React, { useEffect, useContext } from 'react'
import { TodosBoxWithTodosCompleted } from '../todosBox';
import { todosContext } from '../todosProvider';
import './todosList.css'

const TodosList =() => {
 
    const {inputText, todos, setTodos } = useContext(todosContext);

    const url = `https://jsonplaceholder.typicode.com/todos` ;

    const fetchTodos = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        setTodos([...json]);
    }

    useEffect(() => {
        fetchTodos(url);
        console.log(TodosBoxWithTodosCompleted);
    }, [])

    const filterItems = (arr, query) => {
        return arr.filter(el => el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    
    
    return (
        <div className="todosList" id="todosList" >
            {filterItems(todos, inputText).map(item => 
                <TodosBoxWithTodosCompleted item={item} key={item.id} />
            )}
        </div>
    )
}

export default TodosList;

