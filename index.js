const express = require('express');

const { PORT, MODE } = require('./config');
const cors = require('cors')
const routes = require('./src/routes');

const app = express();

app.use(cors());

app.use(express.json());


app.use('/',routes);

app.listen(PORT, () => {
  console.log(`Server runing in port ${PORT} in ${MODE} mode!`);
});