const submitBtn = document.getElementById("rsm-btn");
// const nameInput = document.getElementById("nameInput");
// const emailInput = document.getElementById("emailInput");
// const subjectInput = document.getElementById("subjectInput");
// const messageInput = document.getElementById("messageInput");
const form = document.getElementById("form");
const modalEle = document.getElementById("modal");

const modalToggler = () => {
  if (modalEle.classList.contains("modal")) {
    modalEle.classList.remove("modal");
  } else {
    modalEle.classList.add("modal");
  }
};

submitBtn.addEventListener("click", (eve) => {
  eve.preventDefault();
  modalToggler();
});

modalEle.addEventListener("click", modalToggler);
