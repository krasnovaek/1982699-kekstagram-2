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

  const checkoutLengthStr = function (str, strLength) {
    return (str.length <= strLength);
  };

  console.log(checkoutLengthStr('проверяемая строка', 20))
};
