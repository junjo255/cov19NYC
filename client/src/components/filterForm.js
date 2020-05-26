import React from 'react';
import { render } from 'react-dom';


const FilterForm = props => {
	
	function handleChange(event) {
		//send the value of how to sort the data to the onDropDownChange function
		props.onDropDownChange(event.target.value);
	}

	return (
		<div className="drop-down">
		<label>
		Sort by: 
			<select value={props.sort} onChange={handleChange}>
				<option value="zip">Zipcode</option>
				<option value="positive">Positive</option>
			</select>
			</label>
		</div>
		)
}




export default FilterForm;