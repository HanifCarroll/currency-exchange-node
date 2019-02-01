const convertUsd = (to, amount) => {
  let result;

  switch (to) {
    case 'yen':
      result = amount * 108.83;
      break;

    case 'peso':
      result = amount * 19.14;
      break;

    case 'pound':
      result = amount * 0.76;
      break;

    case 'euro':
      result = amount * 0.87;
      break;

    default:
      console.log('Invalid Format');
  }

  return result;
}; // End of convertUSD

const convertYen = (to, amount) => {
  let result;

  switch (to) {
    case 'usd':
      result = amount * 0.0092;
      break;

    case 'peso':
      result = amount * 0.18;
      break;

    case 'pound':
      result = amount * 0.007;
      break;

    case 'euro':
      result = amount * 0.008;
      break;

    default:
      console.log('Invalid Format');
  }

  return result;
}; // End of convertYen

const convertPeso = (to, amount) => {
  let result;

  switch (to) {
    case 'usd':
      result = amount * 0.052;
      break;

    case 'yen':
      result = amount * 5.69;
      break;

    case 'pound':
      result = amount * 0.04;
      break;

    case 'euro':
      result = amount * 0.046;
      break;

    default:
      console.log('Invalid Format');
  }

  return result;
}; // End of convertPeso

const convertPound = (to, amount) => {
  let result;

  switch (to) {
    case 'usd':
      result = amount * 1.31;
      break;

    case 'yen':
      result = amount * 142.68;
      break;

    case 'peso':
      result = amount * 25.08;
      break;

    case 'euro':
      result = amount * 1.15;
      break;

    default:
      console.log('Invalid Format');
  }

  return result;
}; // End of convertPound

const convertEuro = (to, amount) => {
  let result;

  switch (to) {
    case 'usd':
      result = amount * 1.14;
      break;

    case 'yen':
      result = amount * 124.56;
      break;

    case 'peso':
      result = amount * 21.88;
      break;

    case 'pound':
      result = amount * 0.87;
      break;

    default:
      console.log('Invalid Format');
  }

  return result;
}; // End of convertEuro
const convert = (from, to, amount) => {
  let result;
  from = from.toLowerCase();
  to = to.toLowerCase();

  if (amount < 0) {
    return 'Invalid number.';
  }

  switch (from) {
    case 'usd':
      result = convertUsd(to, amount);
      break;

    case 'yen':
      result = convertYen(to, amount);
      break;

    case 'peso':
      result = convertPeso(to, amount);
      break;

    case 'pound':
      result = convertPound(to, amount);
      break;

    case 'euro':
      result = convertEuro(to, amount);
      break;

    default:
      console.log('Invalid Format');
  }
  return result;
}; // Convert closing brace

module.exports = convert;
