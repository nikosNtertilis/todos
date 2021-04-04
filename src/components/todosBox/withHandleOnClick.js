import _ from "lodash";
import React, { useContext } from "react"
import { urlJsonPlaceHolder as url } from "../../modules";
import { todosContext } from "../todosProvider";

const withHandleOnClick = (Component) => (props) => {

    const {todos, setTodos} = useContext(todosContext)

    const {item} = props

    const handleOnClick = event =>{

        const submitedTodo = _.clone(todos);
        const data = _.clone(item)
        
        data.completed = !data.completed;
        const init = {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }

        const fetchUpdateTodos = async (url, init) => {
            const response = await fetch(`${url}/${item.id}`, init)
            const json = await response.json();
            
            submitedTodo[todos.indexOf(item)] = json;

            setTodos(submitedTodo);
        }
        
        fetchUpdateTodos(url, init);
    };

    return <Component handleOnClick={handleOnClick} {...props} />
};

export default withHandleOnClick;
