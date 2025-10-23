const express = require("express");
const main = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParser());

main()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      console.log("Server listening at port number: " + process.env.PORT);
    });
  })
  .catch((err) => console.log("Error Occurred: " + err));
