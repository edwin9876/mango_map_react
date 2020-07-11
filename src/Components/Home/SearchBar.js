import React from 'react'
import SearchIC from '../../Icons/searchIC.png'

const SearchBar = () => {
    return (
        <div id="searchTab" className="d-flex justify-content-center">
            <input id="searchbar" type="text" placeholder="SEARCH" />
            <img id="searchIC" className="icons15 hidden" src={SearchIC} alt="searchicon" />
        </div>
    )
}

export default SearchBar
