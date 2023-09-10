import 'animate.css';
import './App.css';
import React,{ useState,useEffect} from 'react';
import InputBar from "./inputbar";
import Heading from "./heading";
import Body from "./body";
import Navbar from "./navbar";

let nextId=0;

export default function App(){
  const [doing,setDoing] = useState([]);
  const [completed,setCompleted] =useState([]);
  const [heading,setHeading] = useState(false);
  const [dark,setDark] = useState(true);

  // useEffect(() =>{
  // console.log(doing);
  // console.log(completed);
  // },[doing,completed]);

  function handleEnter(){
    setHeading(true);
  }

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
    setCompleted(completed.filter(t => t.id !==todoId));
  }

  function handleEdit(todo){
    setDoing(doing.map(t => {
      if(t.id === todo.id)
      {
        console.log(todo);
        return todo;
      }
      else
      {
        return t;
      }

    }))
    setCompleted(completed.map(t => {
      if(t.id === todo.id)
      {
        console.log(todo);
        return todo;
      }
      else
      {
        return t;
      }}))
  }

  function handleCheck(todo)
  {
    if(todo.done)
    {
      setDoing(doing.filter(t => t.id !== todo.id));
      setCompleted([
        ...completed,
        todo,
        ]);
    }
    else{
      setCompleted(completed.filter(t => t.id !== todo.id));
      setDoing([
        ...doing,
        todo,
        ]);
    }
    
  }
  return(
      <div className={`body ${!dark? 'body_light' : ''}`}>
      <Navbar setDark={setDark} dark={dark}/>
        <Heading handleEnter={handleEnter}/>
        <InputBar handleAddToDo={handleAddToDo} heading={heading} setHeading ={setHeading} dark={dark}/>
        <Body doing={doing} completed={completed} handleEdit={handleEdit} handleDelete={handleDelete} handleCheck={handleCheck} dark={dark}/>
      </div>
  );
}


