import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class Sidebar implements OnInit {
    ngOnInit() {
      this.currentList = this.defaultList; 
    }

  listCount:number = 0;
  currentList;
    lists: Object[] = [];
    /**
      * It is used to add the new list and its attributes 
      * 
      * @param {Event} e  - used to call the function which is used to 
      * add the new list while kekup.
      */
    addList(Event) {
      if(Event.keyCode === 13) {
      
      var list = {
        id:this.listCount,
        name:Event.target.value,
        tasks:[],
        taskCount:0,
        isFinished:false
      }
      this.lists[this.listCount] = list;
      this.listCount++;
      this.currentList = list;
      Event.target.value ="";
    }
  }

  defaultList  = {
      id:this.listCount,
      name:"Task",
      tasks:[],
      taskCount:0,
      isFinished:false
    };
    
  ImportantList = {
    id:this.listCount,
    name:"ImportantTask",
    tasks:[],
    taskCount:0,
    isFinished:false
  };  
      
  /**
   * It is used to assign the selected list to current list
   * 
   * @param list - selected list
   */
  
  getTitle(list) {
    this.currentList = list;
    console.log(this.currentList)
  }


}
