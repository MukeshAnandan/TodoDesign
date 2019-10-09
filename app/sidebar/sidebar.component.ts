import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class Sidebar {

  listCount:number = 0;
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

  /**
   * It is used to assign the selected list to current list
   * 
   * @param list - selected list
   */
  currentList;
  getTitle(list) {
    this.currentList = list;
    console.log(this.currentList)
  }

}
