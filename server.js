const express = require('express');
const cors = require('cors');
const convert = require('./convert');

const app = express();

app.use(cors());

<<<<<<< HEAD
let convertPeso = (to, amount) => {
    let result
    switch (to) {
        case 'usd': result = (amount * 0.052)
            break

        case 'yen': result = (amount * 5.69)
            break

        case 'pound': result = (amount * 0.04)
            break

        case 'euro': result = (amount * 0.046)
            break

        default: console.log("Invalid Format")
    } 
    return result
} // End of convertPeso

let convertPound = (to, amount) => {
    let result
    switch (to) {
        case 'usd': result = (amount * 1.31)
            break
        case 'yen': result = (amount * 142.68)
            break

        case 'peso': result = (amount * 25.08)
            break

        case 'euro': result = (amount * 1.15)
            break
        default: console.log("Invalid Format")
    } 
    return result
} // End of convertPound

let convertEuro = (to, amount) => {
    let result
    switch (to) {
        case 'usd': result = (amount * 1.14)
            break
        case 'yen': result = (amount * 124.56)
            break
        case 'peso': result = (amount * 21.88)
            break
        case 'pound': result = (amount * 0.87)
            break
        default: console.log("Invalid Format")
    }
    return result
} // End of convertEuro

app.listen(8080)
=======
app.get('/exchange/:from/:to/:amount', (req, res) => {
  const { from, to, amount } = req.params;
  const total = convert(from, to, amount).toString();
>>>>>>> f4e66376df59bc7fff26e43bd9421aa2a80861ac

  res.send(total);
});

app.listen(8080, () => console.log('Server started...'));
