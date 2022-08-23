const express = require("express");

//adding methods to app variable
const app = express();

//routing is how an app responds to a client/http request
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side!", app: "Natours" });
});

app.post("/", (req, res) => {
  res.send("You can post to this endpoint...");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
