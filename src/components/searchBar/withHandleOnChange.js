import React, { useContext } from 'react'
import { todosContext } from '../todosProvider';

const WithHandleOnChange = (Component) =>(props) => {
    
    const {setInputText} = useContext(todosContext);

    const handleOnChange = (event) => {
        setInputText(event.target.value)    
    };
    const handleOnSubmit = event => {
        event.preventDefault();
    } 

    return <Component {...props} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />;
    
}

export default WithHandleOnChange;


