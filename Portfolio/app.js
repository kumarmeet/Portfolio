const menuBtn = document.getElementById("menu-btn");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("change");

  if (menuBtn.classList.contains("change")) {
    aside.classList.add("show-menu");
    aside.classList.remove("hide-aside");
  } else {
    aside.classList.remove("show-menu");
    aside.classList.add("hide-aside");
  }
});

//reset menu btn and aside bar
window.addEventListener("scroll", () => {
  if (menuBtn.classList.contains("change")) {
    aside.classList.add("hide-aside");
    menuBtn.classList.toggle("change");
  }
});
