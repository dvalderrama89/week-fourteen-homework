const postCreationFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const title = document.querySelector('#post_title').value.trim();
    const postBody = document.querySelector('#postContent').value.trim();
  
    if (title && postBody) {
      // Send the e-mail and postBody to the server
      const response = await fetch('/api/posts/update', {
        method: 'PUT',
        body: JSON.stringify({ title, postBody }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.assign('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  document
    .querySelector('.post-create-form')
    .addEventListener('submit', postCreationFormHandler);
  