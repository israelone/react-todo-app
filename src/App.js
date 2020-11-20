import React, {Component} from 'react'
import './App.css';
import Project from './Components/Project/Project'

class App extends Component {
  constructor(){
    super()
    this.state={
      project:[{
        name:'',
        description: "",
        dueDate:"",
        priority: '',
        tasks: {name:'', status:''}
      }]
    }
  }
  render(){
  return (
    <div className="App">
      <Project />
    </div>
  );
  }
}

export default App;
