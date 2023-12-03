const express = require("express");
require("dotenv").config();
const cors = require("cors");
const MongooseConnection = require("./server");
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

MongooseConnection().then(() => {
  app.listen(port, () => {
    console.log(process.cwd())
    console.log(process.env.DB_URL)
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
