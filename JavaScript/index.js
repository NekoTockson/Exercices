////////////////// Obtenez le modal d'inscription ///////////////////////

function login (){
  const uname = document.getElementById("uname").value;
  const pwsd = document.getElementById("pswd").value;

  const unameLogin = document.getElementById("uname").value;
  const pwsdLogin = document.getElementById("pswd").value;

  if(uname === unameLogin && pwsd === pwsdLogin){
      window.location.href = "./accueil.html";
  }
  else{
    alert("Nuh uh")
  }
}
  
function register(){
  const uname = document.getElementById("uname").value;
  const pwsd = document.getElementById("pswd").value;
  const repeatPSWD = document.getElementById("repeatPSWD").value;

  if(pwsd === repeatPSWD){
    localStorage.setItem("uname", uname)
    localStorage.setItem("pswd", pwsd)
  }
  }
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