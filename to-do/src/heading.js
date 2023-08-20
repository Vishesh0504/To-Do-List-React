import React from 'react';

import "./heading.css";

let heading = ({text})=>{
	return(
		<div className="heading" >
			<input 
			type="text"
			placeholder ={text}/>
		</div>
		);
}

export default heading;