import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubtaskComponent {

  @Input() task;
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
    }
  }

    addAdditionalNotes(Event) {
      if(Event.keyCode === 13) {
        this.task.additionalnote = Event.target.value
      }
    }

    changeTaskName(Event) {
      if(Event.keyCode === 13) {
        this.task.name = Event.target.value
      }
    }
}
