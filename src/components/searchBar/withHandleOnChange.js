import React from 'react'
import { useDispatch } from 'react-redux';
import { updateText } from "../../models/slices";

const withHandleOnChange = (Component) =>(props) => {
    
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        dispatch( updateText( event.target.value ) );    
    };

    const handleOnSubmit = event => {
        event.preventDefault();
    } 

    return <Component {...props} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} />;
    
}

export default withHandleOnChange;


