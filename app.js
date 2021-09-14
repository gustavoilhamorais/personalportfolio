const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");
const serverless = require('serverless-http');

// Public //
app.use(express.static(path.join(__dirname, "public")));

// Handlebars //
app.set("view engine", "hbs");
app.engine("hbs", hbs({ extname: "hbs", defaultLayout: "index" }));

// Required Modules //
const home = require("./routes/home");
const blog = require("./routes/blog");

// Routes //
app.use("/", home);
app.use("/blog", blog);

module.exports.handler = serverless(app);
