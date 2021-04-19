import React, { useContext, useEffect } from "react"
import {fetchTodos} from "../../models/fetchTodos";
import { todosContext } from "../todosProvider";

const withFilterItemByTitle = (Component) => (props) => {

    const {setTodos, inputText, todos} = useContext(todosContext);

    useEffect(() => {

        (async () => {
            setTodos( await fetchTodos() );
        })()

    }, [])

	const filterItemsByTitle = (arr, query) => arr.filter(el => 
			el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    
  	return <Component filterItemsByTitle={filterItemsByTitle} inputText={inputText} todos={todos} {...props} />
};

export default withFilterItemByTitle;
