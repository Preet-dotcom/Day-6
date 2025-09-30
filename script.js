(function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  function isValidEmail(email) {
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(String(email).trim());
  }

  function showError(inputEl, errorEl, message) {
    inputEl.parentElement.classList.add('invalid');
    errorEl.textContent = message;
  }

  function clearError(inputEl, errorEl) {
    inputEl.parentElement.classList.remove('invalid');
    errorEl.textContent = '';
  }

  function validate() {
    let isValid = true;
    formSuccess.hidden = true;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (!nameValue) {
      showError(nameInput, nameError, 'Please enter your name.');
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    if (!emailValue) {
      showError(emailInput, emailError, 'Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, emailError, 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    if (!messageValue) {
      showError(messageInput, messageError, 'Please enter a message.');
      isValid = false;
    } else {
      clearError(messageInput, messageError);
    }

    return isValid;
  }

  form.addEventListener('submit', function (e) {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    formSuccess.hidden = false;
    form.reset();
  });

  // Real-time feedback on blur
  [nameInput, emailInput, messageInput].forEach(function (input) {
    input.addEventListener('blur', function () {
      validate();
    });
  });
})();

