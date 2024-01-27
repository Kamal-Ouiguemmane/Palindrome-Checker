const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

function onSubmit() {
  const expression = textInput.value.trim();
  if (expression === '') {
    alert('Please enter some text.');
    resultElement.textContent = '';
    return;
  }
  const formattedExpression = removePunctuation(expression);
  generateResultMessage(expression, isAPalindrome(formattedExpression));
}

function isAPalindrome(str) {
  let lowerCasedStr = str.toLowerCase();
  return lowerCasedStr === lowerCasedStr.split('').reverse().join('');
}

function removePunctuation(str) {
  const punctuationString = ' !@#$%^&*()-=_+[]{}|;:\'",.<>/?` ';
  return str
    .split('')
    .filter(el => !punctuationString.includes(el))
    .join('');
}

function generateResultMessage(str, isPalindrome) {
  resultElement.textContent = `${str} ${
    isPalindrome ? 'is' : 'is not'
  } a Palindrome`;
}

checkButton.addEventListener('click', onSubmit);
