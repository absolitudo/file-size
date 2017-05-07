var fs = require("fs"),
    express = require("express"),
    app = express(),
    multer = require("multer"),
    upload = multer({dest: "uploads/"});

app.use(express.static("./static"));

app.post("/upload", upload.single("file"), function(req, res) {
    res.send({
        "size": fs.statSync("uploads/" + req.file.filename).size
    });
    fs.unlink("uploads/" + req.file.filename);
});
app.listen(process.env.PORT || 8080);
console.log("server up");
