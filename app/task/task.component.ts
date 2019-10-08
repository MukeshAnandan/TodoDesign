import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
   @Input() list;
    taskCount:number = 0;
    addTask(Event) {
      this.taskCount = this.list.tasks.length;
      if(Event.keyCode === 13) {
      var task = {
        id:this.taskCount,
        name:Event.target.value,
        subtasks:[],
        additionalnote:"",
        subtaskcount:0,
        completedSubtaskcount:0,
        isFinished:false
      }
      this.list.tasks[this.taskCount] = task;
      this.currentTask = task;
      this.list.taskCount = this.getTaskCount();
      Event.target.value ="";
    }
  }

  currentTask;
  getTask(task) {
    this.currentTask = task;
    console.log(this.currentTask)
  }

  changeListName(Event) {
    if(Event.keyCode === 13) {
      this.list.name = Event.target.value
    }
  }

  changeCheckboxStatus(task) {
    task.isFinished = !task.isFinished;
    this.list.tasks[task.id] = task;
    console.log(this.list.tasks[task.id])
  }

  getTaskCount():number {
    return this.list.tasks.filter(task=> task.isFinished === false).length
  }

}
