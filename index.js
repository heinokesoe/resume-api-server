const resume = require('./resume.json');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(resume, null, "  "));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});

