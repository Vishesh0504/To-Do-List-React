import 'animate.css';
import './App.css';
import React,{ useState } from 'react';
import InputBar from "./inputbar";
import Heading from "./heading";
import Body from "./body";


let nextId=0;

export default function App(){
  const [doing,setDoing] = useState([]);
  const [completed,setCompleted] =useState([]);
  
  
  function handleAddToDo(input){
      if(input.length>0)
      {
        setDoing([
        ...doing,
        {id:nextId++, task:input,done:false},
        ])
        console.log(doing);
      }

      
  }

  return(
    <div className="body">
      <Heading/>
      <hr className="linebreak"/>
      <InputBar handleAddToDo={handleAddToDo}/>
      <Body doing={doing} completed={completed}/>
    </div>

  );
}