import React from 'react'
import './searchBar.css'
import WithHandleOnChange from './withHandleOnChange';
import withHandleOnSubmit from './withHandleOnSubmit';

const SearchBar = ({handleOnChange, handleOnSubmit}) => {

    return (
    <div id="searchBar" className="searchBar">
        <form className="bg-color-whitesmoke input-form" onSubmit={handleOnSubmit}>
            <label>
                search todos:
                <input id="searchBarInput" className="input-text" type="text" name="searchBarInput" onChange={handleOnChange} />
            </label>
            {/* <label>
                completed:
                <input id="searchBarCheckBox" className="input-checkBox" type="checkBox" name="searchBarCheckBox" />
            </label> */}
        </form>
    </div>
)}

const SearchBarWithHandleOnChangeWithHandleOnSubmit = withHandleOnSubmit(WithHandleOnChange(SearchBar));
export default SearchBarWithHandleOnChangeWithHandleOnSubmit;

