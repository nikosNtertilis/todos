import React, { useContext } from 'react'
import { todosContext } from '../todosProvider';

const WithHandleOnChange = (Component) =>(props) => {
    
    const {setInputText} = useContext(todosContext);

    const handleOnChange = (event) => {
        event.target.value != ''
        ? setInputText(event.target.value)
        : setInputText('')   
    }; 

    return <Component {...props} handleOnChange={handleOnChange} />;
    
}

export default WithHandleOnChange;


