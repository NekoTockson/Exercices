function save(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;

    
    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask())

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        const listItem = document.getElementById(taskList).value;
        listItem.textContent = taskText;
        taskList.appendChild(listItem)
        taskInput.value = document.createTextNode(taskText)
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        deleteBtn.addEventListener("click", () => {listItem.remove();
        });}
        
    else{alert("Veuillez entrez une tâche valide");}
;} */

const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

var task = "task";
var i = 0;

// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.

 

addTaskBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText !==""){

    const listItem = document.createElement("li");

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    taskInput.value = "";

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Supprimer";

    // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau noeud ou repositionner un

    //noeud existant en tant que dernier enfant d'un noeud parent particulier.

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {

    listItem.remove();

 });

 }else{

    alert("Veuillez entrer une tâche valide.");

 

 }
localStorage.setItem(task.concat(i), taskText);i++
 }