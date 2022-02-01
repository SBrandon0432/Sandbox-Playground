const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {test} = require('./dataGen');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('Client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get( '/api/movies', (req, res)=> {
  console.log('test here')
  // let data = test()
  // console.log(data)
  res.send('herejidrhci')
})