import React,{useState,useEffect} from 'react';
import "./navbar.css";
import night from "./dark.png";
import light from "./brightness.png";



export default function Navbar({setDark,dark}){
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
	<div className={`navbar ${ dark ?'':'navbar_light'}`}>
		<p className='day'>{time.toLocaleString(undefined, {
    		weekday: 'short',
  		})} , {time.toLocaleDateString(undefined, {
    		month: 'short',
    		day: 'numeric',
  		})}    {time.toLocaleTimeString([],{
			hour: '2-digit',
			minute:'2-digit',
			hour12:false,
		})}</p>
		
		<button className='dark'
			onClick={() =>{setDark(!dark)}}
		>
			<img 
			src={!dark ? night :light}/>
		</button>
	</div>
	);
}