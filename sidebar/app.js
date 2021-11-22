// selecting the differnt buttons
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// below eventlistener : when that button is clicked it enables the sidebar
toggleBtn.addEventListener("click", function () {

  // the below code also works but the substitute for this long code is .toggle 

  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }

  sidebar.classList.toggle("show-sidebar");
});

// below eventlistener : when that button is clicked it removes the sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
}); 