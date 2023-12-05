require("dotenv").config();
const express = require("express");
const cors = require("cors");
const MongooseConnection = require("./server");
const app = express();
const UserRouter = require('./app/user/user.route');
const swaggerUi = require('swagger-ui-express');
const YAML = require("yamljs");
const HouseRouter = require("./app/house/house.route");


const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors())

app.use('/api/v1', HouseRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/api/v1', HouseRouter)
app.use("/api/v1", UserRouter)


app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || "something went occurred";
  res.status(status).json({
    status,
    message,
  });
});


MongooseConnection().then(() => {
  app.listen(port, () => {
    console.log(process.cwd())
    console.log(`Server listening at http://localhost:${port}`);
  });
});
