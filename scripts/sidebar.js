const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

toggleBtn.addEventListener("click", () => {
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
    main.style.marginLeft = "0";
  } else {
    sidebar.style.left = "0px";
    main.style.marginLeft = "250px";
  }
});
