const express = require('express');
const cors = require('cors');
const convert = require('./convert');

const app = express();
app.use(cors());

<<<<<<< HEAD
app.use(cors());

=======
>>>>>>> fdee43294901525d2ea49a7cf934254e4d7e0e0b
app.get('/exchange/:from/:to/:amount', (req, res) => {
  const { from, to, amount } = req.params;
  const total = convert(from, to, Number(amount)).toString();

  res.send(total);
});

app.listen(8080, () => console.log('Server started...'));
