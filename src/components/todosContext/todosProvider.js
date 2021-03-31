import React, { useReducer } from 'react'
import { initialState, todosReducer } from '../../models/todos';
import todosContext from './todosContext'

const { Provider } = todosContext;

function TodosProvider(props) {

    const [state, dispatch] = useReducer(todosReducer, initialState);

    return (
        <Provider value={{
            state,
            fetchTodos: (inputText) => dispatch(fetchTodos(inputText)),
        }}>
            {props.children}
        </Provider>
    )
}

export default TodosProvider;
