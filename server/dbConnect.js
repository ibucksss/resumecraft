const mongoose = require("mongoose");

const URL =
  "mongodb+srv://ibucksss:dbPass@pocketpal.hw7tlos.mongodb.net/ResumeCraft";

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});
connection.on("error", (error) => {
  console.log(error);
});
