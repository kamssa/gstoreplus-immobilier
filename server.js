const express = require("express");
const app = express();
const path = require("path");
const request = require("request");
app.use(express.static(__dirname + "dist/gstoreimmobilier"));
app.listen(process.env.port || 4200);
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "dist/gstoreimmobilier/index.html"));
});
console.log("app is listenning");
