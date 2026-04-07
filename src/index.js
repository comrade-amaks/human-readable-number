module.exports = function toReadable(number) {
  const dictionary = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  };

  if (number < 10) {
    return dictionary[number];
  }

  if (number >= 10 && number <= 19) {
    return dictionary[number];
  }

  if (number >= 20 && number <= 99) {
    if (number.toString()[1] === '0') {
      // or math variant Math.floor(number / 10) * 10 ( 21 / 10 = math.floor(2.1) =  2 * 10 = 20)
      return dictionary[number];
    }
    // eslint-disable-next-line
    return `${dictionary[number.toString()[0] + '0']} ${dictionary[number.toString()[1]]}`;
    // return `${dictionary[Math.floor(number / 10) * 10]} ${dictionary[number % 10]}`
  }

  if (number >= 100 && number <= 999) {
    // eslint-disable-next-line
    return `${dictionary[number.toString()[0]]} ${dictionary[100]}${number % 100 ? ' ' + toReadable(number % 100) : ''}`;
  }

  return 'Enter a number from 0 to 999';
};
