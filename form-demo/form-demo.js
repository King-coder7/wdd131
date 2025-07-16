// form-demo.js
function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;
  
    // Custom validation from Activity 3
    if (theForm.paymentMethod.value === "creditCard") {
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
  
    // If the form is not valid, prevent submission and show errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    const theForm = document.querySelector("#checkoutForm");
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    // Hide both payment containers initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    // Remove the 'required' attribute from both fields
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
  
    // Show the correct container and make its field required
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.required = true;
    }
  }
  
  // Helper function to display errors
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  
  // Attach event listener for payment method changes
  document
    .querySelector("#paymentMethod")
    .addEventListener("change", togglePaymentDetails);
  
  // Attach event listener for form submission
  document
    .querySelector("#checkoutForm")
    .addEventListener("submit", validateForm);