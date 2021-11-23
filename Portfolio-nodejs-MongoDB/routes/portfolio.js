const express = require("express");
const mongodb = require('mongodb');
const db = require("../data/database");
const ObjectId = mongodb.ObjectId;

const router = express.Router();


let isFormFilled = false;

router.get("/", (req, res) => {
  const pics = {
    cProgramming: "C-programming.jpg",
    cppProgramming: "C++_programming.jpg",
    dsaUsingC: "C++_programming.jpg",
    ticTacToe: "tic-tac-toe.jpg",
    colorGame: "color-game.jpg",
    tindo: "tindo.jpg",
  };

  res.render("portfolio", { pics: pics });
});

router.post("/", async (req, res) => {
  const data = {
    name: req.body.nameInput,
    email: req.body.emailInput,
    subject: req.body.subjectInput,
    message: req.body.messageInput,
  }

  await db.getDB().collection("contacts").insertOne(data);

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
