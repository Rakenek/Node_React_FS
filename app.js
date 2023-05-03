const express = require('express');
require('./services/passport');

const app = express();
const port = 5000;

require('./routes/authRoutes')(app);

app.listen(process.env.PORT || port, () =>
  console.log(`Listening on port ${port}`)
);
