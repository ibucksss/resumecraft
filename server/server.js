const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");

app.use(express.json());
app.use(express.static("static"));
const userRoute = require("./routes/userRoute");
const port = process.env.PORT || 4000;
const path = require("path");

app.use("/api/user/", userRoute);

if ((process.env.NODE_ENV = "production")) {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
