const express = require("express")
const app = express();


app.use(function (req, res, next) {
    const start = Date.now();
    res.on('finish', function () {
        let duration = Date.now() - start;
        console.log(duration);
    });
    next();

});


app.get("/", function (req, res) {
    res.json("hello");
})


app.listen(3000);
