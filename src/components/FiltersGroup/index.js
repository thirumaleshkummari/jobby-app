// FiltersGroup.js
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {searchInput, handleSearchInputChange, getJobs} = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      getJobs()
    }
  }

  const onChangeSearchInput = event => {
    handleSearchInputChange(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <button
          data-testid="searchButton"
          className="search-button"
          onClick={getJobs}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
