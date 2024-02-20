////////////////// Obtenez le modal d'inscription ///////////////////////
let uname = document.getElementById("uname").value;
let pswd = document.getElementById("pswd").value;
let pswdRepeat = document.getElementById("repeatPSWD").value;
alert(uname + "'s password is " + pswd + " " + pswdRepeat)
function userInfo (){

/*loginButton.addEventListener("click", (e) => {
    e.preventDefault();


    let storedName = localStorage.getItem('uname');
    let storedPw = localStorage.getItem('pswd');

    if (unameConnect === storedName && pswdConnect === storedPw) {
        alert("You have successfully logged in.");*/
        document.location='accueil.html';
    }
    //else{alert("Nuh uh")}
//})
  
//}
/* function register(){
  if(pswdRepeat === pswd){
    localStorage.setItem('uname', uname);
    localStorage.setItem('pswd', pswd);
  }
} */
// ////////////////// Obtenez le modal d'inscription ///////////////////////
var modal = document.getElementById('id01');

// // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   }
}


// ///////////////// Obtenez le modal de connexion //////////////////////////
 var modal2 = document.getElementById('id02');

  //Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function(event) {
     if (event.target == modal2) {
         modal.style.display = "none";
     }
 }