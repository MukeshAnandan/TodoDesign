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
        isFinished:false
      }
      this.list.tasks[this.taskCount] = task;
    }
  }

}
