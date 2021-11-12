const express = require("express");

const router = express.Router();

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

module.exports = router;
