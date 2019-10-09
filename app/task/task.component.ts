import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
   @Input() list;
    taskCount:number = 0;
    /**
      *It is used to add the new task and its attributes 
      * 
      * @param {Event} e  - used to call the function which is used to 
      * add the new task while kekup.
      */
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
        sideInfo :false,
        isFinished:false
      }
      this.list.tasks[this.taskCount] = task;
      this.currentTask = task;
      this.list.taskCount = this.getTaskCount();
      Event.target.value ="";
    }
  }
  
  /**
   * It is used to assign the selected list to current task
   * 
   * @param task - selected task
   */
  currentTask;
  getTask(task) {
    task.sideInfo = true;
    this.currentTask = task;
    console.log(this.currentTask)
  }
  
  /**
   * It is used to assign the new list name 
   * 
   * @param {Event} e - used to get the current value
   */
  changeListName(Event) {
    if(Event.keyCode === 13) {
      this.list.name = Event.target.value
    }
  }
  
  /**
   * It is used to change the task attributes while changing
   * the check box status
   * 
   * @param task - selected task
   */
  changeCheckboxStatus(task) {
    task.isFinished = !task.isFinished;
    this.list.tasks[task.id] = task;
    console.log(this.list.tasks[task.id])
  }

  /**
   * It is used to get the task count
   * return number of task present in the list
   */
  getTaskCount():number {
    return this.list.tasks.filter(task=> task.isFinished === false).length
  }

}
