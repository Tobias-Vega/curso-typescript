var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.json({
        ok: true,
        message: 'Todo salió bien'
    });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
