var express = require("express"),
    app = express(),
    multer = require("multer");

app.use(express.static("./static"));
app.listen(process.env.PORT || 8080);
console.log("server up");
