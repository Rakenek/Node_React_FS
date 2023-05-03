const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();
const port = 5000;

require('./routes/authRoutes')(app);

app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
