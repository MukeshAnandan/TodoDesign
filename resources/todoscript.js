function openNav() {
  document.getElementById("mysubbar").style.width = "325px";
}

function closeNav() {
  document.getElementById("mysubbar").style.width = "0";
}

var lists = [];
var listname;
var taskId =0;
var listid = 0;
var notesname;
var subnotesname;
var notesid = 0;
var divId = 1;
var subDivId = 1;
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
   for(i = 0;i <= oldtasks.length-1; i++) {
        var taskName = document.createElement("span");
        var taskDiv = document.createElement("div");
        taskDiv.id = divisionId++;
        console.log(taskDiv.id);
        var taskList = document.getElementById("newTaskDef");
        /*if(strikedNote[i].strikeName === oldtasks[i].notesname && 
            strikedNote[i].strikeID == taskDiv.id) {
        
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
        taskName.addEventListener("click",changeName.bind(oldtasks[i]));
        
        
        
        
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
    notes.additionalNote = "";
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
    notes.notesid = list.tasks.length;
    list.tasks.push(notes);
    console.log("notesID incr"+notes.notesid);
    //createStep();
    taskName.addEventListener("click",getNotesTitle.bind(notes));
    taskName.addEventListener("click",changeName.bind(notes));
    input.addEventListener("click", strikeFunction.bind(taskDiv));
    //taskDiv.addEventListener("click",getTask.bind(notes));
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
    console.log("taskId"+taskId)
    var list = lists[listid];
    var note = list.tasks[taskId];
    
    console.log(list.tasks[taskId]);
    var subnotes = {};
    var taskName = document.createElement("span");
    var notesDiv = document.createElement("div");
    notesDiv.id = subDivId++;
    notesDiv.name = newSubNotes.value;
    var newTaskInfo = newSubNotes.value;
    subnotes.subnotesname = newSubNotes.value;
    var taskList = document.getElementById("subNotes");
    taskName.innerHTML = newSubNotes.value;
    var inputType = document.createElement("INPUT");
    inputType.type = "checkbox";
    notesDiv.className = "newNotes";
    notesDiv.appendChild(inputType);
    notesDiv.appendChild(taskName);
    taskList.appendChild(notesDiv);
    newSubNotes.value ="";
    console.log("before push");
    note.subnote.push(subnotes);
    console.log("after push");
    console.log(lists[listid].tasks);
    inputType.addEventListener("click", strikeFunction.bind(notesDiv));
} 

var additionalNotes= document.getElementById("additional");
additionalNotes.addEventListener("keyup", additionalNoteForm);

function additionalNoteForm(e) {
    if(e.keyCode == 13 && additionalNotes.value != "") {
        console.log("aDD 1");
        additionalSubNotes();
    }
} 

function additionalSubNotes() {
    console.log("aDD 2");
    var list = lists[listid];
    var note = list.tasks[taskId];
    note.additionalNote = additionalNotes.value;
    console.log("aDD  END");

}





function getNotesTitle() {

    console.log("notes id"+this.notesid);
    openNav();
    taskId = this.notesid;
    taskAttributes.value = this.notesname;
    document.getElementById("subNotes").innerHTML = "";
    document.getElementById("additional").value = "";
    
    viewCurrentsubNotes(taskId);
    viewAdditionalNotes(taskId);
    console.log("tommy");
    
}

function changeName() {
    console.log("tommy son");
    taskId = this.notesid;
    taskAttributes.value = this.notesname;
    var localname = this.notesid;
    var subTitleInput = document.getElementById("subTitle");
    subTitleInput.addEventListener("keyup", editNoteName);
        function editNoteName(e) {
            console.log("CREATE NEW name updated");
            if(e.keyCode == 13 && subTitleInput.value != "") {
                changeNoteName();
            }
        }
        function changeNoteName() {
            console.log("tommy in");
            var list =  lists[listid];
            var oldtasks = list.tasks;
         loop: for(i = 0;i <= oldtasks.length-1; i++) {
                    console.log("tommy for");
                    console.log(localname);
                    console.log(oldtasks[i].notesid);
                if(oldtasks[i].notesid == localname) {
                    console.log("tommy if");
                    oldtasks[i].notesname = subTitleInput.value;
                    document.getElementById("newTaskDef").innerHTML = "";
                    break loop;
                }
                
            }  
            switchCurrentNotes(listid);
            localname = "";  
        

        }
}    

function viewAdditionalNotes(taskId) {
  var list = lists[listid];
  var note = list.tasks[taskId];
  var additionaltext = note.additionalNote;
  var add_text = document.getElementById("additional");
  add_text.value = additionaltext;
}

function viewCurrentsubNotes(taskId) {
  console.log(taskId);
  var list = lists[listid];
  var note = list.tasks[taskId];
  var divisionId =1;
  var oldsubnotes = note.subnote;
  var additionaltext = note.additionalNote;
  
   for(i = 0;i <= oldsubnotes.length-1; i++) {
    var taskName = document.createElement("span");
    var notesDiv = document.createElement("div");
    notesDiv.id = divisionId++;
    var taskList = document.getElementById("subNotes");
    console.log(oldsubnotes[i]);
    taskName.innerHTML = oldsubnotes[i].subnotesname ;
    var inputType = document.createElement("INPUT");
    inputType.type = "checkbox";
    notesDiv.className = "newNotes";
    notesDiv.appendChild(inputType);
    notesDiv.appendChild(taskName);
    taskList.appendChild(notesDiv);
    
    inputType.addEventListener("click", strikeFunction.bind(notesDiv));  
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










   










