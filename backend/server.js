const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 7070
app.use(cors());
app.use(bodyParser.json());
const data = [
  {
    name: "foo",
    id: 1,
  },
  {
    name: "eoo",
    id: 2,
  },
  {
    name: "joo",
    id: 3,
  },
];
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the values
app.get("/values/all",  (req, res) => {
  res.json(data);
});

// now the post -> insert value
app.post("/values",  (req, res) => {
  if (!req.body.value) res.send({ working: false });
  data.push({ id: data.length + 1, name: req.body.value })
  res.send({ working: true });
});

app.listen(port, err => {
  console.log("Listening on port:"+  port);
});
