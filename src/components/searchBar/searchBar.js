import React, { useContext, useEffect } from 'react'
import { todosContext } from '../todosProvider';
import './searchBar.css'

const SearchBar = () => {

    const {inputText, setInputText, setTodos} = useContext(todosContext);

    const getData = (event) => {
        event.target.value != ''
        ? setInputText(`title=${event.target.value}`)
        : setInputText('')
        
    };

    return (
        <div id="searchBar" className="searchBar">
            <form className="bg-color-whitesmoke">
                <label>
                    Search todos:
                    <input type="text" name="searchBarInput" onChange={getData} />
                </label>
            </form>
        </div>
    )
}

export {
    SearchBar,
} 
