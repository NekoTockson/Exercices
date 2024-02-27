function userInfo(event){
    event.preventDefault()
    const userNameLog = document.getElementById("unameLogin").value;
    const userPswdLog = document.getElementById("pswdLogin").value;
    const loginName = localStorage.getItem("uname");
    const loginPswd = localStorage.getItem("pswd");
    if ((userPswdLog === loginPswd) && (userNameLog === loginName)){
        moveWS.style.display = "none";}
    else {
        alert("Nom ou mot de passe invalide.");
    }
}
function regist (event){
    event.preventDefault()
    const moveWS = document.getElementById("moveWS");
    const username = document.getElementById("uname").value;
    const userPswdReg = document.getElementById("pswd").value;
    const pswdConfirm = document.getElementById("repeatPSWD").value;
    if (userPswdReg === pswdConfirm){
        localStorage.setItem("uname", username)
        localStorage.setItem("pswd", userPswdReg)
        
    }

}

const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll") ;

const groupList = document.getElementById("groupList") ;

var task = "undone task ";

var done = "task done ";

var i = 0;
var j = 0;

// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const doneBtn = document.createElement("img");

    doneBtn.setAttribute("src", "../img/icons8-checkmark-50.png");
    doneBtn.setAttribute('height', '18px');
    doneBtn.setAttribute('width', '18px');

    listItem.appendChild(doneBtn);

    doneBtn.addEventListener("click", () => {
        if(listItem.id == ""){
            listItem.id = "taskDone"
        }
        else(
            listItem.id = ""
            )});
        

    const editBtn = document.createElement("img");

    editBtn.setAttribute("src", "../img/icons8-edit-file-50.png");
    editBtn.setAttribute('height', '18px');
    editBtn.setAttribute('width', '18px');

    listItem.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });

    const deleteBtn = document.createElement("img");

    deleteBtn.setAttribute("src", "../img/icons8-delete-60.png");
    deleteBtn.setAttribute('height', '18px');
    deleteBtn.setAttribute('width', '18px');

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

        listItem.remove();

    });

    /*const groupInput = document.createElement("input")
    const addGroupButton = document.createElement("button")
    groupInput.setAttribute('height', '18px');
    groupInput.setAttribute('width', '5px');
    groupInput.setAttribute("placeholder", "Group")
    addGroupButton.textContent = "Add"
    addGroupButton.setAttribute("onclick", "addGroup()")

    listItem.appendChild(groupInput)
    listItem.appendChild(addGroupButton)

    addGroupButton.addEventListener("click", () => {

        const groupItem = document.createElement("li");

        groupItem.value = groupInput;

        groupList.appendChild(groupItem);

        groupInput.textContent = ""
    })*/

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    
    }
    else{
        alert("Veuillez entrer une tâche valide.");
    }


localStorage.setItem(task.concat(i), (taskText), i++)

clearAll.addEventListener("click", () => {
    localStorage.clear()
})
}