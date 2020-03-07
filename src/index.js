const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  ' ': ' '
};

function decode(expr) {
  // console.log(expr);
  let expr2 = [],
    expr3 = [];

  for (let i = 0; i < expr.length; i += 10) {
    expr2.push(
      expr
        .substr(i, 10)
        .replace(/^0+/, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-')
        .replace(/\*{10}/, ' ')
    );
  }

  //console.log(expr2);

  expr3 = expr2.map(n => MORSE_TABLE[n]);
  // console.log(expr3);

  return expr3.join('');
}

module.exports = {
  decode
};
