const express = require("express");

const router = express.Router();

const db = require("../data/database");

let isFormFilled = false;

router.get("/", (req, res) => {
  const pics = {
    cProgramming: "C-programming.jpg",
    cppProgramming: "C++_programming.jpg",
    dsaUsingC: "C++_programming.jpg",
    diceGame: "dice-game.jpg",
    ticTacToe: "tic-tac-toe.jpg",
    colorGame: "color-game.jpg",
    tindo: "tindo.jpg",
  };

  res.render("portfolio", { pics: pics });
});

router.post("/", async (req, res) => {
  const data = [
    req.body.nameInput,
    req.body.emailInput,
    req.body.subjectInput,
    req.body.messageInput,
  ];

  await db.query(
    `INSERT INTO portfolio.contact (name, email, subject, message) VALUES (?)`,
    [data]
  );

  isFormFilled = true;
  res.redirect("/confirm");
});

router.get("/confirm", (req, res) => {
  if (!isFormFilled) {
    res.send("Form Not Filled");
    return;
  }

  isFormFilled = false;
  res.render("confirm");
});

module.exports = router;
