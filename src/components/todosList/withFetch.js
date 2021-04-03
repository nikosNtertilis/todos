import React, { useContext, useEffect } from 'react'
import { todosContext } from '../todosProvider';

const withFetch = (Component, url) => (props) =>{

    const {setTodos} = useContext(todosContext);

    const fetchTodos = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        setTodos([...json]);
    }

    useEffect(() => {
        fetchTodos(url);
    }, [])

    return <Component {...props}/>
}

export default withFetch
