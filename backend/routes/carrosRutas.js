import express from 'express';

const router = express.Router();

app.get('/', function (req, res) {
  res.send('root')
})