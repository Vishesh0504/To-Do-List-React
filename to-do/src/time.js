import React,{useState,useEffect} from 'react';
import "./time.css";

export default function Time(){
	const [time,setTime] = useState(new Date());

	useEffect(()=>{
		const intervalId = setInterval(()=>{
			setTime(new Date());
		},60000);
	

	return ()=>{ 
		clearInterval(intervalId);
	};
},[]);

return(
	<div className='dateandtime'>
		<p className='day'>{time.toLocaleString(undefined, {
    		weekday: 'short',
  		})} , {time.toLocaleDateString(undefined, {
    		month: 'short',
    		day: 'numeric',
  		})}
  		</p>
  		<p className='time'>
		{time.toLocaleTimeString([],{
			hour: '2-digit',
			minute:'2-digit',
			hour12:false,
		})}</p>
	</div>
	);
}