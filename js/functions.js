
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reverseString += normalizedString[i];
  }

  return normalizedString === reverseString;
};

const checkPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = normalizedString.split('').reverse().join('');
  return normalizedString === reverseString;
};
const getNumber = (string) => {
  const normalizedString = string.toString();
  let resultNumber = '';

  for (let i = 0; i < normalizedString.length; i++) {
    const checkedSymbol = parseInt(normalizedString[i], 10);
    if (!Number.isNaN(checkedSymbol)) {
      resultNumber += checkedSymbol;
    }
  }
  const checkstringmaxlenth ('Длина строки', 20); {
    const newString = (string.replaceAll(' ', '')).toLowerCase();
    let emptyString = '';
    for (let i = newString.length - 1; i >= 0; i--) {
      emptyString += newString.at(i);
    }
    return emptyString === newString;
  }
