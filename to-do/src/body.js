import React,{useState, useRef,useEffect} from 'react';
import trash from "./trash.png";
import edit from "./edit.png";
import save from "./correct.png";
import "./body.css";
import "animate.css";

export default function body({doing,completed,handleEdit,handleDelete,handleCheck,dark}){
	return(
		<div className="container">
			<div className={`tasks ${dark?'':'tasks_light'}`}>
				<h1>To-Do</h1>
				<ul>	
					{doing.map(task =>(
							<li className="list" key={task.id} >
								<Task task={task} onEdit={handleEdit} onDelete ={handleDelete} onCheck={handleCheck}/>
							</li>			
					))}
				</ul>
			</div>
			<div className={`tasks ${dark?'':'tasks_light'}`}>
				<h1>Completed</h1>
				{
					completed.map(task =>(
								<li className="list" key={task.id} >
									<Task task={task} onEdit={handleEdit} onDelete ={handleDelete} onCheck={handleCheck}/>
								</li>
							)	
					)
			}
			</div>
		</div>
);
}	
function Task({task,onDelete,onEdit,onCheck}){
	const [editing,setEditing]=useState(false);
	const [check,setCheck ] =useState(false);
	let todoContent;
	const ref = useRef(null);
	
	useEffect(() => {
	    if (editing) {
	      ref.current.focus();
	    }
	  	}, [editing]);

	useEffect(() =>{
		if(check)
		{
			onCheck(task);
			setCheck(false);
		}
	},[onCheck,task,check]);

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
				}}

				onKeyDown ={e=> {
					if(e.key ==="Enter" || e.key ==="Escape")
					{
						onEdit({
							...task,
							task:e.target.value,
						})
						setEditing(false);
					}
				}

				}
				/>
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
					<img src={edit} alt="edit" className="edit" />
				</button>
			</>	
		);
	}

	return(
		<div className="task animate__animated animate__fadeInLeft  ">
			<input
			type="checkbox"
			checked={task.done}
			onChange={(e)=>{
				onEdit({...task,
				done: e.target.checked,	
			});
			setCheck(true);
			}}/>
			{todoContent}
			<button onClick = {()=>{
				setTimeout(()=>{
					onDelete(task.id)},1000)}}>
				<img src ={trash} alt="delete" />
			</button>	
		</div>
	);
}