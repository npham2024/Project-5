function checkForm() {
   let formErrors = document.getElementById("formErrors");
   formErrors.innerHTML = ""; // Clear previous errors
   let errors = [];

   // Get input values
   let fullName = document.getElementById("fullName").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   let passwordConfirm = document.getElementById("passwordConfirm").value;

   // Validation checks
   if (fullName.length < 1) {
      errors.push("Missing full name.");
      document.getElementById("fullName").classList.add("error");
   }

   let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!email || !emailRegex.test(email)) {
      errors.push("Invalid or missing email address.");
      document.getElementById("email").classList.add("error");
   }

   if (password.length < 10 || password.length > 20) {
      errors.push("Password must be between 10 and 20 characters.");
      document.getElementById("password").classList.add("error");
   }

   if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase character.");
      document.getElementById("password").classList.add("error");
   }

   if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase character.");
      document.getElementById("password").classList.add("error");
   }

   if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one digit.");
      document.getElementById("password").classList.add("error");
   }

   if (password !== passwordConfirm) {
      errors.push("Password and confirmation password don't match.");
      document.getElementById("passwordConfirm").classList.add("error");
   }

   if (errors.length > 0) {
      // Display errors
      formErrors.classList.remove("hide");
      let errorList = "<ul>";
      errors.forEach(function (error) {
         errorList += "<li>" + error + "</li>";
      });
      errorList += "</ul>";
      formErrors.innerHTML = errorList;
   } else {
      // Hide errors and clear error classes
      formErrors.classList.add("hide");
   }
}

document.getElementById("submit").addEventListener("click", function (event) {
   checkForm();
   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});
