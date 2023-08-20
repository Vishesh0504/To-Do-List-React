import React from 'react';
import "./task.css";

let task=({tasks})=>{
	return(
			<ul>
				{tasks.map((elmts,index) =>(
						<li className="list" key={index}>
							<span className="checkmark"></span>
							<input 
								type="checkbox"
							/>
							<span>{elmts}</span>

						</li>		
			))}
			</ul>
)
}

export default task;