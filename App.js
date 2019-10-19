import React from 'react';
import './App.css';

function App() {
  return (
    <div id="myDIV">
      <div className="header">
      <h2 Class ="headertext">To Do</h2>
      </div>
      <Sidebar/> 
      <Task/>
    </div>    
  );
}

class Sidebar extends React.Component {
  constructor(props) 
    { 
        super(props); 
        this.state = { lists:[],attribute : "" ,name: '',currentlist:[]}; 
        this.createList = this.createList.bind(this);
    } 
  render() {
    return (
      <React.Fragment>
      <div>
<div id="mySidebar" class="sidenav">
    <div class = "sidecontent" >
    <a href="#"><i class = "iconsize sun"></i> &nbsp;My Day</a>
    </div>
    <div class = "sidecontent">
    <a href="#"><i class = "iconsize star"></i>&nbsp; Important</a>
    </div>
    <div class = "sidecontent">
    <a href="#"><i class = "iconsize calender"></i>&nbsp;Planned</a>
    </div>
    <div class = "sidecontent">
    <a href="#"><i class = "iconsize person"></i>&nbsp;Assigned to me</a>
    </div>
    <div class = "sidecontent">
    <a href="#"><i class = "iconsize home"></i>&nbsp;Task</a>
    </div>
    
    
    <div id ="taskList" class ="addlists"  >
        <div class ="taskPointer"  >
            <div>
        {this.state.lists.map(list => (
          <div  onClick={this.setCurrentList.bind(this,list)}>
          <i class="iconsize listicon"></i>
          <span key={list.id}>{list.name} </span>
          </div>
        ))}
</div>
            <input class = "addList"  type = "text" value =  "" />
        </div>
        
    </div>
    
    <div>
    <span class ="iconsize plus"></span><input  id = "taskinput" class="addList" type="text" placeholder= "New List"  onKeyUp={this.createList}/> 
    </div>
 
</div>  
</div>
<Task currentList={this.state.currentlist}/>
</React.Fragment>
    );
  }

  setCurrentList(list ){
    this.setState({currentlist:list});
    console.log(this.state.currentList);
  }
createList(event) {
  if(event.keyCode === 13) {
    this.setState({ name:event.target.value });
    var list = {
      id:this.state.lists.length,
      name:event.target.value,
      tasks:[],
      taskCount:0,
      isFinished:false
    };
    this.setState({lists : this.state.lists.concat(list)});
    console.log(this.state.lists);
    event.target.value="";
  }

}

}


class Task extends React.Component {
  constructor(props) 
  { 
      super(props); 
      this.createTask = this.createTask.bind(this);
      
  } 
    render() {
      return (
        <div id="todo-list">
<div class = "tasklength">
    <div id="info"  class="info">
        <input class="tasktitle" value = {this.props.currentList.id}/>
    </div>
    <div id ="newTaskDef" class ="newtaskDetail"> 
        <div class = "newtask">
        <input  type = "checkbox" id = "checkboxinput" /> <span>  </span> 
        <span><input class="imp_check" type = "checkbox" /></span>
        
        </div>
    </div>

    <div class="newtask">
        <span class ="plus"></span>
        <input id="add-new-task" class="addtask" type="text" 
            placeholder="Add task" onClick={this.createTask}/>   
    </div>
</div>


<div class = "subtask_design">
</div>
</div>
                       
      );
    }


  createTask() {
    console.log(this.props);
  }
}

export default App;

