require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const { isActiveRoute } = require("./providers/routeHelpers");
const Handler = require("./handler");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Templating Engine

app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;

app.use(Handler);
app.all("*", function (req, res) {
  res.sendFile(path.join(__dirname, "error.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
