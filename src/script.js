const firstNameInput = document.getElementById("firstNameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
// const phoneInput = document.getElementById("phoneInput");
const passwordInput = document.getElementById("passwordInput");
const confirmPasswordInput = document.getElementById("confirmPasswordInput");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
// const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const firstRule = document.getElementById("firstRule");
const secondRule = document.getElementById("secondRule");
const thirdRule = document.getElementById("thirdRule");
const fourthRule = document.getElementById("fourthRule");
const icons = document.querySelectorAll(".rule-icon");

firstNameInput.addEventListener("blur", function (e) {
  e.preventDefault;
  if (
    firstNameInput.value.length > 0 &&
    firstNameInput.validity.patternMismatch
  ) {
    firstNameError.textContent = "* Please enter your first name";
    firstNameError.classList.add("show");
    firstNameInput.classList.add("invalid-input");
  }

  firstNameInput.addEventListener("input", function () {
    if (firstNameInput.validity.patternMismatch) {
      firstNameError.textContent = "* Please enter your first name";
      firstNameError.classList.add("show");
      firstNameInput.classList.add("invalid-input");
    } else {
      firstNameError.textContent = "";
      firstNameError.classList.remove("show");
      firstNameInput.classList.remove("invalid-input");
    }
  });
});

lastNameInput.addEventListener("blur", function () {
  if (
    lastNameInput.value.length > 0 &&
    lastNameInput.validity.patternMismatch
  ) {
    lastNameError.textContent = "* Please enter your last name";
    lastNameError.classList.add("show");
    lastNameInput.classList.add("invalid-input");
  }

  lastNameInput.addEventListener("input", function () {
    if (lastNameInput.validity.patternMismatch) {
      lastNameError.textContent = "* Please enter your last name";
      lastNameError.classList.add("show");
      lastNameInput.classList.add("invalid-input");
    } else {
      lastNameError.textContent = "";
      lastNameError.classList.remove("show");
      lastNameInput.classList.remove("invalid-input");
    }
  });
});

emailInput.addEventListener("blur", function () {
  if (emailInput.value.length > 0 && emailInput.validity.patternMismatch) {
    emailError.textContent = "* Please enter valid email";
    emailError.classList.add("show");
    emailInput.classList.add("invalid-input");
  }

  emailInput.addEventListener("input", function () {
    if (emailInput.validity.patternMismatch) {
      emailError.textContent = "* Please enter valid email";
      emailError.classList.add("show");
      emailInput.classList.add("invalid-input");
    } else {
      emailError.textContent = "";
      emailError.classList.remove("show");
      emailInput.classList.remove("invalid-input");
    }
  });
});

// phoneInput.addEventListener("blur", function () {
//   if (phoneInput.value.length > 0 && phoneInput.validity.patternMismatch) {
//     phoneError.textContent = "* Please enter your phone number";
//     phoneError.classList.add("show");
//     phoneInput.classList.add("invalid-input");
//   }

//   phoneInput.addEventListener("input", function () {
//     if (phoneInput.validity.patternMismatch) {
//       phoneError.textContent = "* Please enter your phone number";
//       phoneError.classList.add("show");
//       phoneInput.classList.add("invalid-input");
//     } else {
//       phoneError.textContent = "";
//       phoneError.classList.remove("show");
//       phoneInput.classList.remove("invalid-input");
//     }
//   });
// });

passwordInput.addEventListener("focus", function () {
  passwordError.classList.add("show");

  passwordInput.addEventListener("blur", function () {
    passwordError.classList.remove("show");

    if (passwordInput.validity.patternMismatch) {
      passwordInput.classList.add("invalid-input");
    }

    passwordInput.addEventListener("input", function () {
      if (passwordInput.validity.patternMismatch) {
        passwordInput.classList.add("invalid-input");
      } else {
        passwordInput.classList.remove("invalid-input");
      }
    });
  });

  passwordInput.addEventListener("input", function () {
    // Password Error
    icons.forEach((icon) => {
      if (icon.dataset.rule === "length") {
        if (passwordInput.value.length > 7) {
          firstRule.style.color = "green";
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-check");
          icon.style.color = "green";
        } else {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-xmark");
          icon.style.color = "red";
          firstRule.style.color = "";
        }
      }

      if (icon.dataset.rule === "one-number") {
        if (/\d/.test(passwordInput.value)) {
          secondRule.style.color = "green";
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-check");
          icon.style.color = "green";
        } else {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-xmark");
          icon.style.color = "red";
          secondRule.style.color = "";
        }
      }

      if (icon.dataset.rule === "special-character") {
        if (/[@$!%*#?&]/.test(passwordInput.value)) {
          thirdRule.style.color = "green";
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-check");
          icon.style.color = "green";
        } else {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-xmark");
          icon.style.color = "red";
          thirdRule.style.color = "";
        }
      }

      if (icon.dataset.rule === "uppercase-letter") {
        if (/[A-Z]/.test(passwordInput.value)) {
          fourthRule.style.color = "green";
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-check");
          icon.style.color = "green";
        } else {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-xmark");
          icon.style.color = "red";
          fourthRule.style.color = "";
        }
      }
    });
  });
});

confirmPasswordInput.addEventListener("blur", function () {
  if (
    confirmPasswordInput.value.length > 0 &&
    confirmPasswordInput.value !== passwordInput.value
  ) {
    confirmPasswordError.textContent = "* Passwords do not match";
    confirmPasswordError.classList.add("show");
    passwordInput.classList.add("invalid-input");
    confirmPasswordInput.classList.add("invalid-input");
  }

  if (confirmPasswordInput.value === "") {
    confirmPasswordError.textContent = "";
    confirmPasswordError.classList.remove("show");
    confirmPasswordInput.classList.remove("invalid-input");
    if (passwordInput.validity.valid) {
      passwordInput.classList.remove("invalid-input");
    }
  }

  confirmPasswordInput.addEventListener("input", function () {
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "* Passwords do not match";
      confirmPasswordError.classList.add("show");
      passwordInput.classList.add("invalid-input");
      confirmPasswordInput.classList.add("invalid-input");
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordError.classList.remove("show");
      passwordInput.classList.remove("invalid-input");
      confirmPasswordInput.classList.remove("invalid-input");
    }
  });
});

// const form = document.getElementById("signUpForm");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // Check for validity of form
//   if (form.checkValidity() === false) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("No valid");
//   } else {
//     console.log("Form is valid");
//     console.log(e.target);
//     console.log(e.target.first_name.value);
//     console.log(e.target.last_name.value);
//     console.log(e.target.email.value);
//     console.log(e.target.phone_number.value);
//     console.log(e.target.password.value);
//     console.log(e.target.confirm_password.value);
//   }
// });

if (navigator.userAgent.indexOf("iPhone") > -1) {
  document
    .querySelector("[name=viewport]")
    .setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=1"
    );
}
