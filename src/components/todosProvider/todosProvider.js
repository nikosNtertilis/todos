import React, { useContext } from 'react'
import todosContext from './todosContext';

const { Provider } = useContext(todosContext);

const TodosProvider = () => {

    
    return (
        <Provider value={

        }>

        </Provider>
    )
}

export default TodosProvider;
