import React, { useContext, useEffect } from "react"
import { todosContext } from "../todosProvider";

const withFilterItemByTitle = (Component, url) => (props) => {

    const {setTodos, inputText, todos} = useContext(todosContext);

    const fetchTodos = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        setTodos([...json]);
    }

    useEffect(() => {
        fetchTodos(url);
    }, [])

	const filterItemsByTitle = (arr, query) => arr.filter(el => 
			el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    
  	return <Component filterItemsByTitle={filterItemsByTitle} inputText={inputText} todos={todos} {...props} />
};

export default withFilterItemByTitle;
