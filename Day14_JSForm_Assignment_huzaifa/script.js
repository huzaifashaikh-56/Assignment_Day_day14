// Get references to form and message elements
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Capture values from input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Clear previous messages
  message.innerHTML = "";
  message.className = "";

  // Required field validation
  if (!name || !email || !phone) {
    message.innerHTML = "All fields are required.";
    message.className = "error";
    return;
  }

  // Basic email format validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    message.innerHTML = "Please enter a valid email address.";
    message.className = "error";
    return;
  }

  // If all validations are successful
  message.innerHTML = "Form submitted successfully!";
  message.className = "success";

  // Reset the form
  form.reset();
});
