import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class Sidebar {

  listCount:number = 0;
    lists: Object[] = [];
    addList(Event) {
      if(Event.keyCode === 13) {
      var list = {
        id:this.listCount,
        name:Event.target.value,
        tasks:[],
        isFinished:false
      }
      this.lists[this.listCount] = list;
      this.listCount++;
    }
  }
  currentList;
  getTitle(list) {
    this.currentList = list;
    console.log(this.currentList)
  }

}
