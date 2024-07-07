import React from 'react'
import './index.css'

const LocationList = props => {
  const {typeDetails, handleLocationChange, selectedLocation} = props
  const {label, locationId} = typeDetails

  const handleChange = () => {
    const updatedSelection = selectedLocation.includes(locationId)
      ? selectedLocation.filter(type => type !== locationId)
      : [...selectedLocation, locationId]
    handleLocationChange(updatedSelection)
  }

  return (
    <li>
      <input
        type="checkbox"
        id={label.toLowerCase().replace(' ', '-')}
        checked={selectedLocation.includes(locationId)}
        onChange={handleChange}
      />
      <label
        htmlFor={label.toLowerCase().replace(' ', '-')}
        className="label-text"
      >
        {label}
      </label>
    </li>
  )
}

export default LocationList
