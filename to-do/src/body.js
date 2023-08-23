import React,{useState} from 'react';
import "./body.css";

export default function body({doing,completed,handleEdit,handleDelete}){
	return(
		<div className="container">
			<div className="doing">
				<h1> To-Do</h1>
				<ul>	
					{doing.map(task =>{
						return(
							<>
								<li key={task.id} className="list">
									<input
									type="checkbox"
									/>
									{task.task}
								</li>
							</>
							)
						
					})}
				</ul>
			</div>
			<div className="completed">
				<h1>Completed</h1>
			</div>
		</div>
		)
}