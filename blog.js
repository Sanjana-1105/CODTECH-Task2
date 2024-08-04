// Blog post
document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    const renderPosts = () => {
        const postContainer = document.getElementById('postContainer');
        postContainer.innerHTML = '';
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button onclick="editPost(${index})">Edit</button>
                <button onclick="deletePost(${index})">Delete</button>
                <div id="comments-${index}"></div>
                <input type="text" id="commentInput-${index}" placeholder="Add a comment">
                <button onclick="addComment(${index})">Add Comment</button>
            `;
            postContainer.appendChild(postElement);
            displayComments(index);
        });
    };

    document.getElementById('newPostForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;

        posts.push({ title, content, comments: [] });
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    });

    document.getElementById('editPostForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = e.target.editIndex.value;
        const title = e.target.editTitle.value;
        const content = e.target.editContent.value;

        posts[index] = { ...posts[index], title, content };
        localStorage.setItem('posts', JSON.stringify(posts));
        window.location.href = 'index.html';
    });

    renderPosts();
});

const editPost = (index) => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts[index];
    document.getElementById('editTitle').value = post.title;
    document.getElementById('editContent').value = post.content;
    document.getElementById('editIndex').value = index;
    window.location.href = 'editpost.html';
};

const deletePost = (index) => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
    window.location.reload();
};
