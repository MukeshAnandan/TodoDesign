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

    addAdditionalNotes(Event) {
      if(Event.keyCode === 13) {
        this.task.additionalnote = Event.target.value
        Event.target.value ="";
      }
    }

    changeTaskName(Event) {
      if(Event.keyCode === 13) {
        this.task.name = Event.target.value
        Event.target.value ="";
      }
    }

    changeSubtaskCheckboxStatus(subtask) {
      subtask.isFinished = !subtask.isFinished;
      this.task.subtasks[subtask.id] = subtask;
      this.task.completedSubtaskcount = this.getCompletedSubTaskCount();
      console.log(this.task.subtasks[subtask.id])
    }

    changeCheckboxStatus(task) {
      task.isFinished = !task.isFinished;
      this.list.tasks[task.id] = task;
      console.log(this.list.tasks[task.id])
    }

    getSubTaskCount():number {
      return this.task.subtasks.length
    }
    getCompletedSubTaskCount():number {
      return this.task.subtasks.filter(subtask=> subtask.isFinished === true).length
    }
}

