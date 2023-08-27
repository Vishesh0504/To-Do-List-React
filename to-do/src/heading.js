import {useState} from 'react';
import "./heading.css";

export default function Heading({handleEnter}){
	let [title, setTitle] = useState('');

	return(
		<div className="heading">
			<input
			type = "text"
			placeholder ="Untitled"
			value={title}
			onChange = {
				(e)=>{setTitle(title=e.target.value)}
			}
			onKeyDown ={
				(e)=>
				{
					if(e.key === "Enter")
					{
						handleEnter();
					}
				}
			}
			/>
		</div>
		)
}