import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, function () {
  console.log("root route");
});

app.get("/", function (req, res) {
  res.json("hellow");
});

app.post("/messages", function (request, response) {
  let message = request.body;
  console.log(request.body, message);
  response.json(message);
});
