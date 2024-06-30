require("dotenv").config();

var random = require("random-name");
const express = require("express");

const insertUser = require("./insertUser");
const listUsers = require("./listUser");
const templatePage = require("./templatePage");

const app = express();
const port = 3333;

app.get("/", async (req, res) => {
  await insertUser(random());

  const users = await listUsers();

  const templateUsers = users.map((item) => "<li>" + item + "</li>").join("\n");

  res.setHeader("Content-Type", "text/html");
  res.send(templatePage(templateUsers));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
