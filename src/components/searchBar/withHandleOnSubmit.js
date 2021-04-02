import React, { useContext } from "react"
import { todosContext } from "../todosProvider";

const withHandleOnSubmit = (Component) => (props) => {

    const {setInputText} = useContext(todosContext);

    const handleOnSubmit = event => {
        
        setInputText("");
        document.getElementById("searchBarInput").value = "";
        event.preventDefault();
    };

    return <Component handleOnSubmit={handleOnSubmit} {...props} />
};

export default withHandleOnSubmit;
