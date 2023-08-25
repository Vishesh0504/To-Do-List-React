import React,{useState, useRef,useEffect} from 'react';
import trash from "./trash.png";
import edit from "./edit.png";
import save from "./correct.png";
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
								<Task task={task} onEdit={handleEdit} onDelete ={handleDelete}/>
							</li>			
					))}
				</ul>
			</div>
			<div className="completed">
				<h1>Completed</h1>
				{
					completed.map(task => {
							return(
							<>	
								<li key={task.id} className="list">
									<Task task={task} onDelete ={handleDelete}/>
								</li>
							</>
							)	
					}
			)
		}
			</div>
		</div>
);
}	
function Task({task,onDelete,onEdit}){
	const [editing,setEditing]=useState(false);
	let todoContent;
	const ref = useRef(null);
	
	useEffect(() => {
    if (editing) {
      ref.current.focus();
    }
  	}, [editing]);

	if(editing)
	{
		todoContent =(
			<>
				<input
				className="input"
				ref = {ref}
				value = {task.task}
				onChange ={e => {
					onEdit({
						...task,
						task: e.target.value,
					})
				}}/>
				<button className="save" 
				onClick={(e) =>
				{
					
					if((task.task).length>0)
					{
						setEditing(false);
					}
					else{
						alert("input field can't be empty");
					}
				}
				}>
					<img src={save} alt="save" />
				</button>
			</>	 
	);
}
	else{
		todoContent =(
			<>
				{task.task}
				<button onClick={() =>{
					setEditing(true);
				}
				}>
					<img src={edit} alt="edit" />
				</button>
			</>	
		);
	}

	return(
		<div className="task">
			<input
			type="checkbox"
			
			/>
			{todoContent}
			<button onClick = {()=>{onDelete(task.id)}}>
				<img src ={trash} alt="delete" />
			</button>	
		</div>
	);
}