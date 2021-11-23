"use strict";

const toggle = {
  menuBtn: null,
  aside: null,
  multiPos: null,

  setElements() {
    this.aside = document.querySelector("aside");
    this.menuBtn = document.getElementById("menu-btn");
    this.multiPos = document.getElementById("multiple-pos");
  },

  menuBtnHandler() {
    this.setElements();
    this.menuBtn.addEventListener("click", () => {
      this.menuBtn.classList.toggle("change");
      this.aside.classList.toggle("show-menu");
      this.aside.classList.toggle("hide-aside");
    });
  },

  //reset menu-btn and aside bar
  resetMenuBtnOnScroll() {
    this.setElements();
    window.addEventListener("scroll", () => {
      this.aside.classList.add("hide-aside");
      this.menuBtn.classList.remove("change");
    });
  },

  multipleYoutubeHandler() {
    this.setElements();
    this.multiPos.addEventListener("mouseenter", () => {
      const links = `
      <div class = "card">
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=JJRCjfPI1fg&t=710s" target="_blank">
            Place 2
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=hGZKFgUA81A&t=1010s" target="_blank">
            Place 1
            </a>
          </li>
        </ul>
      </div>
      `;
      this.multiPos.innerHTML = "Youtube" + links;
    });

    this.multiPos.addEventListener("mouseleave", () => {
      this.multiPos.textContent = "Youtube";
    });
  },

  init() {
    this.multipleYoutubeHandler();
    this.menuBtnHandler();
    this.resetMenuBtnOnScroll();
    //refresh page scroll to top of the page
    window.scrollTo(0, 0);
  },
};

toggle.init();
