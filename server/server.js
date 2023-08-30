const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static('client'));

app.use("/hello", (req, res) => {
  res.json({
    "message": "Hello World!"
  });
});

app.listen(3000, () => {
  console.log("CORS-enabled web server listening on port 3000");
});