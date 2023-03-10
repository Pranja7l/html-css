    // Password validation
    var passwordInput = document.getElementById('password');
    var passwordConfirmInput = document.getElementById('confirm_password');
    passwordInput.addEventListener('input', function() {
      if (passwordInput.validity.patternMismatch) {
        passwordInput.setCustomValidity('Password should be 6-15 characters long and contain at least one capital letter and @ symbol.');
      } else {
        passwordInput.setCustomValidity('');
      }
    });
    passwordConfirmInput.addEventListener('input', function() {
      if (passwordInput.value !== passwordConfirmInput.value) {
        password
      }
    })
