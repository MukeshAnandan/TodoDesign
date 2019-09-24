function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var lists = [];
var listname;
var listid = 0;
var divId = 1;
var notesname;
var notesid=0;



var newtask = document.getElementById("taskinput");
newtask.addEventListener("keyup", createNewTask);
console.log(document.getElementById("taskinput").value);
var taskAssign = document.getElementsByClassName("addlists")[0];
var tasktitle = document.getElementsByClassName("tasktitle")[0];
var taskAttributes = document.getElementsByClassName("taskAttributes")[0];
var hideOldNotes = document.getElementsByClassName("taskList")[0];

function createNewTask(e) {
    console.log("CREATE NEW");
    if(e.keyCode == 13 && newtask.value != "") {
        // addEventListener("click",getTaskTitle());
        addTask();
    }
}

function addTask() {
    let list = {};
    var taskName = document.createElement("span");
    var taskDiv = document.createElement("div");
    var nextTask = newtask.value;
    var taskList = document.getElementById("taskList");
    list.listname = newtask.value;
    list.tasks = [];
    taskName.innerHTML = list.listname;
    taskDiv.innerHTML= '<i class="iconsize listicon"></i>';
    taskDiv.appendChild(taskName);
    taskList.appendChild(taskDiv);
    lists.push(list);
    list.listid = lists.length - 1;
    console.log(list.listid);
    console.log(lists.length - 1);
    
    newtask.value ="";
    taskName.addEventListener("click",getTaskTitle.bind(list));
    taskDiv.addEventListener("click",getTask.bind(list));
    listid  = list.id;
}

function getTaskTitle() {
    tasktitle.innerText = this.listname;
    //hideOldNotes.innerHTML ="";
}
function getTask() {
    listid = this.listid;
    console.log(listid);

}
var newtaskInfo = document.getElementById("add-new-task");
newtaskInfo.addEventListener("keyup", createNewNote);

var NoteAssign = document.getElementsByClassName("newtaskDetail")[0];

function createNewNote(e) {
    console.log("CREATE NEW");
    if(e.keyCode == 13 && newtaskInfo.value != "") {
        addNote();
    }
}

function addNote() {
    var list =  lists[listid];
    console.log(lists[listid]);
    var notes = {};
    var taskName = document.createElement("span");
    var taskDiv = document.createElement("div");
    taskDiv.id = divId++;
    var newTaskInfo = newtaskInfo.value;
    notes.notesname = newtaskInfo.value;
    var taskList = document.getElementById("newTaskDef");
    taskName.innerHTML = newtaskInfo.value;
    var input = document.createElement("INPUT");
    input.type = "checkbox";
    taskDiv.className = "newtask";
    taskDiv.appendChild(input);
    taskDiv.appendChild(taskName);
    taskList.appendChild(taskDiv);
    newtaskInfo.value ="";
    list.tasks.push(notes);
    taskName.addEventListener("click",getNotesTitle.bind(notes));
    input.addEventListener("click", strikeFunction.bind(taskDiv));
} 


function getNotesTitle() {
    taskAttributes.innerText = this.notesname;

}
function strikeFunction() {
    var ele = document.getElementById(this.id);
        ele.style.setProperty("text-decoration", "line-through");
}






   










