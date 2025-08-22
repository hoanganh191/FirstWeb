
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");

navToggle.addEventListener("click", function () {
  mainNav.classList.toggle("is-open");
  // lenh .toggle hoat dong nhu mot cong tac bat/tat , neu chua 
  // co class is-open thi se tu dong them vao con co roi thi se xoa class nay
});
