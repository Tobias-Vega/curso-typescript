// const express = require('express');
import express from 'express';
var app = express();
app.get('/', function (req, res) {
    res.status(201).json({
        ok: true,
        msg: 'Nuevo id 123232'
    });
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
