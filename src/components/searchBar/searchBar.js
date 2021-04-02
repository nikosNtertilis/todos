import React, { useContext } from 'react'
import { todosContext } from '../todosProvider';
import './searchBar.css'
import WithHandleOnChange from './withHandleOnChange';

const SearchBar = ({handleOnChange}) => (
    <div id="searchBar" className="searchBar">
        <form className="bg-color-whitesmoke input-form">
            <label>
                Search todos:
                <input className="input-text" type="text" name="searchBarInput" onChange={handleOnChange} />
            </label>
        </form>
    </div>
)

const SearchBarWithHandleOnChange = WithHandleOnChange(SearchBar);
export default SearchBarWithHandleOnChange;

