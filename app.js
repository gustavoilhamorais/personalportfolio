const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-handlebars");

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

// Express Server //
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
