import React from 'react'

const SearchBar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
            <form>
                <div className="input-field">
                <input id="search" type="search" required>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    
    )
}

export default SearchBar
