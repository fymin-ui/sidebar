const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");


function toggleButton(){
  sidebar.classList.toggle("hidden");
  main.classList.toggle("shifted");
}

toggleBtn.addEventListener("click", toggleButton);

