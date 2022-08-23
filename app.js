const fs = require("fs");
const express = require("express");

//adding methods to app variable
const app = express();

app.use(express.json());

//routing is how an app responds to a client/http request
// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side!", app: "Natours" });
// });

// app.post("/", (req, res) => {
//   res.send("You can post to this endpoint...");
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });
});

//post is for data from client to server
//req object holds all the data about the request
app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
