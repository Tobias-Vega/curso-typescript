// const express = require('express');
import express from 'express';

const app = express();

app.get('/', (req, res) => {

  res.status(201).json({
    ok: true,
    msg: 'Nuevo id 123232'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
