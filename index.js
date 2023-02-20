function validatePhoneNumber(phoneNumber) {
  const regex1 = /^8\d{10}$/; // matches 8xxxxxxxxxx
  const regex2 = /^\+7\d{10}$/; // matches +7xxxxxxxxxx
  const regex3 = /^8\(\d{3}\)\d{7}$/; // matches 8(xxx)xxxxxxx
  const regex4 = /^\+7\(\d{3}\)\d{7}$/; // matches +7(xxx)xxxxxxx

  if (
    regex1.test(phoneNumber) ||
    regex2.test(phoneNumber) ||
    regex3.test(phoneNumber) ||
    regex4.test(phoneNumber)
  ) {
    return null; // valid phone number
  }
  return "Please enter a valid phone number."; // invalid phone number
}

const phoneNumberInput = document.getElementById("phone-number");
const errorElement = document.getElementById("phone-error");

phoneNumberInput.addEventListener("input", function() {
    errorElement.textContent = "";
})

const form = document.getElementById("authform");
form.addEventListener("submit", function(event) {
  const phoneNumber = phoneNumberInput.value;
  const errorMessage = validatePhoneNumber(phoneNumber);
  if (errorMessage) {
    event.preventDefault();
    errorElement.textContent = errorMessage;
  } else {
    errorElement.textContent = "";
  }
});
