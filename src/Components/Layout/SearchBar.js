import React from 'react'
import SearchIC from '../../Icons/searchIC.png'

const SearchBar = () => {
    return (
        // <div id="searchTab" classNameName="d-flex justify-content-center">
        //     <input id="searchbar" type="text" placeholder="SEARCH" />
        //     <img id="searchIC" classNameName="icons15 hidden" src={SearchIC} alt="searchicon" />
        // </div>

        <div className="nav-wrapper">
            <form>
                <div className="input-field">
                    <input id="search" type="search" required/>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
