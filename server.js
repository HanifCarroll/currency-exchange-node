const express = require('express');
const cors = require('cors');
const convert = require('./convert');

const app = express();
app.use(cors());

app.get('/exchange/:from/:to/:amount', (req, res) => {
  let { from, to, amount } = req.params;
  let total;
  amount = Number(amount);

  if (amount > 0) {
    total = convert(from, to, amount).toString();
    res.send(total);
  }
});

app.listen(8080, () => console.log('Server started...'));
