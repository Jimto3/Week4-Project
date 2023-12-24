import express from "express";
import cors from "cors";
import Database from "better-sqlite3";
let db = new Database("database.db");
let newData = db.prepare("INSERT INTO messages VALUES(?, ?)");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, function () {
  console.log("root route");
});

app.get("/messages", function (req, res) {
  let data = db.prepare("SELECT * FROM messages").all();
  res.json(data);
});

app.post("/messages", function (req, res) {
  const sentMessage = req.body;
  newData.run(sentMessage.name, sentMessage.message);
});
