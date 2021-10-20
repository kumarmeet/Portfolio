const menuBtn = document.getElementById("menu-btn");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");
  //toggle aside bar
  aside.classList.toggle("show-menu");
  aside.classList.toggle("hide-aside");
});

//reset menu btn and aside bar
window.addEventListener("scroll", () => {
  aside.classList.add("hide-aside");
  menuBtn.classList.remove("change");
});

//refresh page scroll to top of the page
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
