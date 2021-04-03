import React, { useContext } from "react"
import { urlJsonPlaceHolder as url } from "../../modules";
import { todosContext } from "../todosProvider";
import _ from 'lodash'

const withHandleOnSubmit = (Component) => (props) => {

    const {inputText, setInputText, todos, setTodos} = useContext(todosContext);

    const handleOnSubmit = event => {

        const data = {
            userId: 1,
            title: `${inputText}`,
            completed: false,
        }

        const init = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        const fetchPostTodos = async (url, init) => {
            const response = await fetch(url, init)
            const json = await response.json();
            
            const submitedTodo = _.clone(todos);
            submitedTodo.push(json);

            setTodos(submitedTodo);
        }
        
        fetchPostTodos(url, init);

        setInputText("");
        document.getElementById("searchBarInput").value = "";
        event.preventDefault();
    };

    return <Component handleOnSubmit={handleOnSubmit} {...props} />
};

export default withHandleOnSubmit;
