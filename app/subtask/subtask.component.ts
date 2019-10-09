import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent {
  @Input() task;
  @Input() list;
    subtaskCount:number = 0;
    /**
      *It is used to add the new subtask and its attributes 
      * 
      * @param {Event} e  - used to call the function which is used to 
      * add the new subtask while kekup.
      */
    addSubTask(Event) {
      this.subtaskCount = this.task.subtasks.length;
      if(Event.keyCode === 13) {
      var subtask = {
        id:this.subtaskCount,
        name:Event.target.value,
        isFinished:false
      }
      this.task.subtasks[this.subtaskCount] = subtask;
      this.task.subtaskcount = this.getSubTaskCount();
      Event.target.value ="";
    }
  }

    /**
     * It is used add the additional notes to the current task
     * 
     * @param {Event} e - used to get the value
     */
    addAdditionalNotes(Event) {
      if(Event.keyCode === 13) {
        this.task.additionalnote = Event.target.value
        Event.target.value ="";
      }
    }
    
    /**
     * It is used to change the task name 
     * 
     * @param {Event} e-used to get the value
     */
    changeTaskName(Event) {
      if(Event.keyCode === 13) {
        this.task.name = Event.target.value
        Event.target.value ="";
      }
    }
    
    /**
     * It is used to change the subtask checkbox status
     * 
     * @param subtask - used to change the attributes 
     * while changing the check box status of the subtask
     */
    changeSubtaskCheckboxStatus(subtask) {
      subtask.isFinished = !subtask.isFinished;
      this.task.subtasks[subtask.id] = subtask;
      this.task.completedSubtaskcount = this.getCompletedSubTaskCount();
      console.log(this.task.subtasks[subtask.id])
    }

    /**
     * It is used to change the task checkbox status
     * 
     * @param task - used to change the attributes 
     * while changing the check box status of the task
     */
    changeCheckboxStatus(task) {
      task.isFinished = !task.isFinished;
      this.list.tasks[task.id] = task;
      console.log(this.list.tasks[task.id])
    }

    /**
     * It is used to get the subtask count
     * return number of subtask present in the list
     */
    getSubTaskCount():number {
      return this.task.subtasks.length
    }

    /**
     * It is used to get the completed subtask count
     * return number of subtask completed in the list
     */
    getCompletedSubTaskCount():number {
      return this.task.subtasks.filter(subtask=> subtask.isFinished === true).length
    }
  
    closeSidepanel() {
      this.task.sideInfo = false;
      console.log(this.task);
    }
}

