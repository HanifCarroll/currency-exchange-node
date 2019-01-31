var express = require('express')
var app = express()

app.get('/exchange/:from/:to/:amount', (req, res) => {
    let from = req.params.from
    let to = req.params.to
    let amount = req.params.amount
    res.send(convert(from, to, amount).toString())
})

let convert = (from, to, amount) => {
    let result
    switch (from) {
        case 'usd': result = convertUsd(to, amount)
            break

        case 'yen': result = convertYen(to, amount)
            break

        case 'peso': result = convertPeso(to, amount)
            break

        case 'pound': result = convertPound(to, amount)
            break

        case 'euro': result = convertEuro(to, amount)
            break

        default: console.log("Invalid Format")
    }
    return result
} // Convert closing brace

let convertUsd = (to, amount) => {
    let result
    switch (to) {
        case 'yen': result = (amount * 108.83)
            break

        case 'peso': result = (amount * 19.14)
            break

        case 'pound': result = (amount * 0.76)
            break

        case 'euro': result = (amount * 0.87)
            break

        default: console.log("Invalid Format")
      } 
      return result
} // End of convertUSD

let convertYen = (to, amount) => {
    let result
    switch (to) {
        case 'usd': result = (amount * .0092)
            break

        case 'peso': result = (amount * 0.18)
            break

        case 'pound': result = (amount * 0.007)
            break

        case 'euro': result = (amount * 0.008)
            break

        default: console.log("Invalid Format")
    } 
    return result
} // End of convertYen

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


