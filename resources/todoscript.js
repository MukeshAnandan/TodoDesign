function openNav() {
  document.getElementById("mysubbar").style.width = "325px";
}

function closeNav() {
  document.getElementById("mysubbar").style.width = "0";
}

var lists = [];
var listname;
var listid = 0;
var notesname;
var notesid = 0;
var divId = 1;
var subDivId = 1;
var notesname;
var notesid=0;
var strikedNote = [];
var strikeName;
var strikeID;
var strikestatus;



var newtask = document.getElementById("taskinput");
newtask.addEventListener("keyup", createNewTask);
console.log(document.getElementById("taskinput").value);
var taskAssign = document.getElementsByClassName("addlists")[0];
var tasktitle = document.getElementsByClassName("tasktitle")[0];
var taskAttributes = document.getElementsByClassName("taskAttributes")[0];
var hideOldNotes = document.getElementById("newTaskDef")[0];

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
    taskDiv.addEventListener("click",getTaskTitle.bind(list));
    taskDiv.addEventListener("click",getTask.bind(list));
    listid  = list.id;
}

function getTaskTitle() {
    tasktitle.innerText = this.listname;
    document.getElementById("newTaskDef").innerHTML = "";
}


function switchCurrentNotes(listid) {
  console.log(listid);
  var list =  lists[listid];
  var divisionId =1;
  var oldnote = {};
  var notesname;
  var oldtasks = list.tasks;
   for(i = 0;i <= oldtasks.length; i++) {
        var taskName = document.createElement("span");
        var taskDiv = document.createElement("div");
        taskDiv.id = divisionId++;
        console.log(taskDiv.id);
        var taskList = document.getElementById("newTaskDef");
        /*if(strikedNote[i].strikeName === oldtasks[i].notesname && strikedNote[i].strikeID == taskDiv.id) {
        
            console.log("ifffffffffff");
            var ele = document.getElementById(taskDiv.id);
            ele.style.setProperty("text-decoration", "line-through");  
        }*/
        taskName.innerHTML = oldtasks[i].notesname ;
        oldnote.notesname = oldtasks[i].notesname ;
        var input = document.createElement("INPUT");
        input.type = "checkbox";
        taskDiv.className = "newtask";
        
        taskDiv.appendChild(input);
        taskDiv.appendChild(taskName);
        taskList.appendChild(taskDiv);
        console.log("end....................");
        taskName.addEventListener("click",getNotesTitle.bind(oldtasks[i]));
        
        
        
   }

}

function getTask() {
    listid = this.listid;
    console.log(listid);
    switchCurrentNotes(listid);

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
    notes.subnote = [];
    var taskName = document.createElement("span");
    var taskDiv = document.createElement("div");
    taskDiv.id = divId++;
    taskDiv.name = newtaskInfo.value;
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
    notes.notesid = lists.length - 1;
    //createStep();
    taskName.addEventListener("click",getNotesTitle.bind(notes));
    input.addEventListener("click", strikeFunction.bind(taskDiv));
    taskDiv.addEventListener("click",getTask.bind(notes));
} 



var newSubNotes= document.getElementById("addSubNotes");
newSubNotes.addEventListener("keyup", createSubNote);

var subNoteAssign = document.getElementsByClassName("subnotes")[0];

function createSubNote(e) {
    console.log("CREATE NEW subnotes");
    if(e.keyCode == 13 && newSubNotes.value != "") {
        subNote();
    }
}

function subNote() {
    var list =  lists[listid];
    console.log(lists[listid]);
    var subnotes = {};
    var taskName = document.createElement("span");
    var notesDiv = document.createElement("div");
    notesDiv.id = subDivId++;
    notesDiv.name = newSubNotes.value;
    var newTaskInfo = newSubNotes.value;
    subnotes.notesname = newSubNotes.value;
    var taskList = document.getElementById("subNotes");
    taskName.innerHTML = newSubNotes.value;
    var inputType = document.createElement("INPUT");
    inputType.type = "checkbox";
    notesDiv.className = "newNotes";
    notesDiv.appendChild(inputType);
    notesDiv.appendChild(taskName);
    taskList.appendChild(notesDiv);
    newSubNotes.value ="";
    list.subnote.push(subnotes);
    inputType.addEventListener("click", strikeFunction.bind(notesDiv));
} 



var subTitleInput = document.getElementById("subTitle");

function getNotesTitle() {
    openNav();
    taskAttributes.value = this.notesname;
    
    subTitleInput.addEventListener("keyup", editNoteName);
    function editNoteName(e) {
        console.log("CREATE NEW");
        if(e.keyCode == 13 && newtask.value != "") {
            changeNoteName();
        }
    }
    function changeNoteName() {
        var list =  lists[listid];
        var oldtasks = list.tasks;
        for(i = 0;i <= oldtasks.length; i++) {
            if(oldtasks[i].notesname == this.notesname) {
                oldtasks[i].notesname = subTitleInput.value;
            }
            
        }    
    

    }

}




function strikeFunction() {
    
    var strikedDetail = {};
    var ele = document.getElementById(this.id);
    var subTitle = document.getElementById("subTitle");
        ele.style.setProperty("text-decoration", "line-through");
        subTitle.style.setProperty("text-decoration", "line-through");
        strikedDetail.strikeID = this.id;
        strikedDetail.strikeName = this.name;
        strikedNote.push(strikedDetail);
}

function createStep() {
    var input = document.createElement("INPUT");
    input.type = "checkbox";
    var taskName = document.createElement("span");
    var addSteps = document.getElementById("addsteps");
    input.appendChild(taskName);
    addSteps.appendChild(input);   
}

var closeinfo = document.getElementById("close");
closeinfo.addEventListener("click", closeNav());








   










