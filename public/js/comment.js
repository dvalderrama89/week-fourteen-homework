const addCommentButtonHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const commentBody = document.getElementById('comment').value.trim();
    const postId = document.querySelector('#postCard').getAttribute('postId');

    if (commentBody) {
      // Send the e-mail and postBody to the server
      const response = await fetch(`/api/posts/comment`, {
        method: 'POST',
        body: JSON.stringify({ commentBody, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.reload;
      } else {
        alert('Failed to add comment');
      }
    }
  };
  
  document
    .querySelector('#addComment')
    .addEventListener('click', addCommentButtonHandler);
  