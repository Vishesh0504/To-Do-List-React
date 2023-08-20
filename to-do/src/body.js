import React from 'react';
import './body.css';
import Task from './task';
let Body = ({tasks})=>{
	return(
		<div className='container'>
			<div className='to-do'>
				<h1>To-Do</h1>
				<Task className="tasks" tasks={tasks}/>
			</div>
			<div className='completed'>
				<h1>Completed</h1>
			</div>
		</div>
		);
}

export default Body;