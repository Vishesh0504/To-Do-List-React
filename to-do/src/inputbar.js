import React from 'react';
import "./inputbar.css";
let inpbar = ({inpChange,taskInp,inptext})=>{
	return(
		<div className="inputbar">
			<input 
			type="text"
			placeholder ="Enter the task" 
			className ="input"
			onChange ={inpChange}
			onKeyDown ={(event)=>{
				if(event.key === "Enter")
				{
					taskInp();
				}
			}}
			value ={inptext}
			/>	

			<div className="addtsk">
				<button onClick ={taskInp}>ADD TASK</button>
			</div>
		</div>
		);

}

export default inpbar;