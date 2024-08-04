//Comments
const addComment = (postIndex) => {
    const commentInput = document.getElementById(`commentInput-${postIndex}`);
    const commentText = commentInput.value;
    if (commentText.trim()) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts[postIndex].comments.push(commentText);
        localStorage.setItem('posts', JSON.stringify(posts));
        commentInput.value = '';
        displayComments(postIndex);
    }
};

const displayComments = (postIndex) => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const commentsContainer = document.getElementById(`comments-${postIndex}`);
    commentsContainer.innerHTML = '';
    posts[postIndex].comments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });
};
