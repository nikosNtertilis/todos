import React, { useContext, useState } from 'react'
import todosContext from './todosContext';

const { Provider } = todosContext;

const TodosProvider = (props) => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([])
    
    return (
        <Provider value={{
            inputText, 
            setInputText,
            todos, 
            setTodos,
        }}>
            {props.children}
        </Provider>
    )
}

export default TodosProvider;