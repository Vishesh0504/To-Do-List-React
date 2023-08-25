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
      }      
  }

  function handleDelete(todoId){
    setDoing(doing.filter(t => t.id !== todoId));
    setCompleted(doing.filter(t => t.id !==todoId));
  }

  function handleEdit(todo){
    setDoing(doing.map(t => {
      if(t.id === todo.id)
      {
        return todo;
      }
      else
      {
        return t;
      }
    }))
  }
  return(
    <div className="body">
      <Heading/>
      <hr className="linebreak"/>
      <InputBar handleAddToDo={handleAddToDo} />
      <Body doing={doing} completed={completed} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>

  );
}