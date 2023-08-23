import { useState } from 'react';
import "./heading.css";

export default function Heading(){
	let [title, setTitle] = useState('');

	return(
		<div className="heading">
			<input
			type = "text"
			placeholder ="Untitled"
			onChange = {
				(e)=>{setTitle(title=e.target.value)}
			}
			/>
		</div>
		)
}