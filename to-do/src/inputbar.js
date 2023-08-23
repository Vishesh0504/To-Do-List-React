import React,{useState} from 'react';
import "./inputbar.css";

export default function InputBar({handleAddToDo}){
	const [inp,setInp] =useState('');

	return(
		<div className="inputbar">
			<input 
			type="text"
			placeholder="Enter the task"
			value={inp}
			onChange={e =>setInp(e.target.value)}
			onKeyDown={e =>{
				if(e.key ==="Enter")
				{
					handleAddToDo(inp);
					setInp('');
				}
			}}
				/>
			<button 
			onClick={e =>
				{
					handleAddToDo(inp);
					setInp('');	
				}}
			>
			ADD TASK
			</button>
		</div>
		);
}