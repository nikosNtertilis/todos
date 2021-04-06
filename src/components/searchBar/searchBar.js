import React from 'react'
import './searchBar.css'
import WithHandleOnChange from './withHandleOnChange';

const SearchBar = ({handleOnChange, handleOnSubmit}) => {
    return (
    <div id="searchBar" className="searchBar">
        <form className="bg-color-whitesmoke input-form" onSubmit={handleOnSubmit}>
            <label>
                search todos:
                <input id="searchBarInput" className="input-text" type="text" name="searchBarInput" onChange={handleOnChange} />
            </label>
        </form>
    </div>
)}

export default WithHandleOnChange(SearchBar);

