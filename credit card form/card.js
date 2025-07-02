// card.js

function isCardNumberValid(number) {
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerHTML = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');
  
    const cardNumber = this.cardNumber.value.trim();
    const expMonth = parseInt(this.expMonth.value);
    const expYear = parseInt(this.expYear.value);
    const currentDate = new Date();
    const enteredDate = new Date(2000 + expYear, expMonth - 1); // YY to full year
  
    if (isNaN(cardNumber) || cardNumber === '') {
      errorMsg += 'Card number is not a valid number<br>';
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += 'Card number is not a valid card number<br>';
    }
  
    if (enteredDate < currentDate) {
      errorMsg += 'Expiration date must be in the future<br>';
    }
  
    if (errorMsg !== '') {
      displayError(errorMsg);
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  
  document.querySelector('#credit-card').addEventListener('submit', submitHandler);
  