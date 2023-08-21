import React from 'react';
import "./task.css";
import 'animate.css';

let task=({tasks})=>{
	return(
			<ul>
				{tasks.map((elmts,index) =>(
						
							<li className="list" key={index}>
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