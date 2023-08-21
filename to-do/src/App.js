import 'animate.css';
import './App.css';
import React,{Component} from 'react';
import InputBar from "./inputbar";
import Heading from "./heading";
import Body from "./body";

class App extends Component {
      
      constructor(props){
        super(props);
        this.state ={
          inptext:"",
          tasks:[]
        }
      };

    inpChange =(event)=>{
      this.setState({inptext:event.target.value});
    }

    taskInp =(event)=>{
        if(this.state.inptext.trim() !== "")
        {
          this.setState(prevState=>(
          {
            tasks:[...prevState.tasks,prevState.inptext],
            inptext:""
          }));
        }
    };
    render()
    {
      return(
        <>
        <div className="body">
            <Heading  text ="Untitled" />
            <hr className="linebreak "/>
            <InputBar  inpChange={this.inpChange} taskInp={this.taskInp} inptext={this.state.inptext}/>
            <Body tasks={this.state.tasks} />
         </div>  
        </>  
        );
    };
    
}

export default App;
