const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

//for the logout part
const logout = document.getElementById("logout");

function toggleButton(){
  sidebar.classList.toggle("hidden");
  main.classList.toggle("shifted");
}

toggleBtn.addEventListener("click", toggleButton);

function confirmation(){
  const confirmIt = confirm("Do you really want to log out?");

}

logout.addEventListener("click", confirmation);