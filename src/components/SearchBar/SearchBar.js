import React from 'react'
import {Search as SearchIcon} from '@material-ui/icons/';
import "./SearchBar.scss"

function SearchBar() {
    return (
        <div className="searchbar-container">
            <input type="text" className="searchbar-input"/>
            <SearchIcon className="searchbar-icon"/>
        </div>
    )
}

export default SearchBar
