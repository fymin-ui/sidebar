const logout = document.getElementById("logout");
const modal = document.getElementById("custom-confirm");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");

function confirmation(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
}

logout.addEventListener("click", confirmation);

function Yes(){

    modal.classList.add("hidden");
}

confirmYes.addEventListener("click", Yes);

function No(){

    modal.classList.add("hidden");
}

confirmNo.addEventListener("click", No);


