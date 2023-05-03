const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(process.env.PORT) || port,
  () => console.log(`Listening on port ${port}`);
