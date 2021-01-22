const express = require("express");
const engine = require("ejs-mate");
const config = require("./config/config");
const path = require("path");

const app = express();

//template engine
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.use(require("./routes/index"));

//static files
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(config.port, () => {
  let today = new Date();
  console.log(
    `[Server] Servidor escuchando en el puerto ${config.port} a las ${today}.`
  );
});
