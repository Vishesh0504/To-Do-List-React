import React,{useState,useRef,useEffect} from 'react';
import "./inputbar.css";

export default function InputBar({handleAddToDo,heading,setHeading}){
	const [inp,setInp] =useState('');
	let inpRef = useRef(null);

	useEffect(() => {
      if(heading)
      {
        inpRef.current.focus();
        setHeading(false);
      }
  	},[heading,setHeading]);

	return(
		<div className="inputbar">
			<input 
			type="text"
			placeholder="Enter the task"
			ref ={inpRef}
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