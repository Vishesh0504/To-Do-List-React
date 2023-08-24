import React,{useState} from 'react';
import trash from "./trash.png";
import edit from "./edit.png";
import "./body.css";
import "animate.css";

export default function body({doing,completed,handleEdit,handleDelete}){
	return(
		<div className="container">
			<div className="doing">
				<h1>To-Do</h1>
				<ul>	
					{doing.map(task =>(
							<li key={task.id} className="list">
								<Task task={task} handleDelete ={handleDelete}/>
							</li>			
					))}
				</ul>
			</div>
			<div className="completed">
				<h1>Completed</h1>
				{
					completed.map(task => {
						<>
							<li key={task.id} className="list">
								<Task task={task}/>
							</li>
						</>		
					}
			)
		}
			</div>
		</div>
);
	
function Task({task}){
	const [edit,setEditing]=useState(false);
	return(
		<>
			<input
			type="checkbox"
			/>
			{task.task}
			<button>
				<img src={trash}/>
			</button>
		</>
	);
}
}
