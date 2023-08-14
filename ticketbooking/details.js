
window.onload = function () {
      
    

  // Retrieve summary table HTML from local storage
  const summaryTableHTML = localStorage.getItem('summaryTableHTML');

  // Display summary table in the details page
  document.getElementById('summary-table').innerHTML = summaryTableHTML;

  // Enable "Continue with Purchase" button if all required fields are filled
  const form = document.getElementById('details-form');
  const continueBtn = document.getElementById('continue-btn');
  const mobileNumberInput = document.getElementById('mobile-number');
  const countryCode = document.getElementById('country-code');

  form.addEventListener('input', () => {
    if (form.checkValidity()) {
      continueBtn.removeAttribute('disabled');
      clearErrorMessages();
    } else {
      continueBtn.setAttribute('disabled', 'true');
      displayErrorMessages();
    }
  });
  function clearErrorMessages() {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
      message.textContent = '';
    });
  }

  function displayErrorMessages() {
    clearErrorMessages(); // Clear existing error messages

    const errorFields = form.querySelectorAll(':invalid');
    errorFields.forEach(field => {
      const errorMessage = field.dataset.errorMessage || 'Invalid input';
      const errorContainer = field.nextElementSibling;
      errorContainer.textContent = errorMessage;
    });
  }

  // Save details to local storage upon form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
   

    // Save details to local storage (you can adjust the keys as needed)
    localStorage.setItem('fullName', form['full-name'].value);
    localStorage.setItem('email', form['email'].value);
    localStorage.setItem('gender', form['gender'].value);
    localStorage.setItem('countryCode',  countryCode.value)
    localStorage.setItem('mobileNumber',mobileNumberInput.value )
    

    // Redirect to Payment page
    window.location.href = 'payment.html';
  });
  
};





