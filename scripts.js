document.getElementById('submit-post').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    if (postContent) {
        const postList = document.getElementById('post-list');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.textContent = postContent;
        postList.prepend(newPost);
        document.getElementById('post-content').value = ''; // Clear the textarea
    } else {
        alert('Proszę wpisać coś przed wysłaniem!');
    }
});