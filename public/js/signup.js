const signupFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const userName = document.querySelector('#username-login').value.trim();
    const email = document.querySelector('#signup-email-login').value.trim();
    const password = document.querySelector('#signup-password-login').value.trim();
  
    if (email && password) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ userName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.assign('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.submit-form')
    .addEventListener('submit', signupFormHandler);
  