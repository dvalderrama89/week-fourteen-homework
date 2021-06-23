const postDeletionHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    const postId = document.querySelector('#deletePost').getAttribute('postId');
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        window.location.assign('/dashboard');
    } else {
        alert('Failed to delete post');
    }
  };
  
  document
    .querySelector('#deletePost')
    .addEventListener('click', postDeletionHandler);
  