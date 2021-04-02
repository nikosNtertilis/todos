import React, { useContext } from 'react'
import { todosContext } from '../todosProvider';

const WithHandleOnChange = (Component) =>(props) => {
    
    const {setInputText} = useContext(todosContext);

    const handleOnChange = (event) => {
        setInputText(event.target.value)    
    }; 

    return <Component {...props} handleOnChange={handleOnChange} />;
    
}

export default WithHandleOnChange;


