import React, { useState } from 'react'
import './searchBar.css'




const SearchBar = () => {

    const [inputText, setInputText] = useState("");


    const getData = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div id="searchBar" className="searchBar">
            <form>
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
