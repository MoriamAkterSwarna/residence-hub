require("dotenv").config();
const express = require("express");



const cors = require("cors");
const MongooseConnection = require("./server");
const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require("yamljs");
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

MongooseConnection().then(() => {
  app.listen(port, () => {
    console.log(process.cwd())
    console.log(`Server listening at http://localhost:${port}`);
  });
});
