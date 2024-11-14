document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const media = document.getElementById('media').files[0];

    const postContainer = document.getElementById('posts');
    const postElement = document.createElement('article');

    const mediaElement = document.createElement(media.type.startsWith('image/') ? 'img' : 'video');
    mediaElement.src = URL.createObjectURL(media);
    mediaElement.controls = media.type.startsWith('video/');

    postElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    postElement.appendChild(mediaElement);
    postContainer.prepend(postElement);

    document.getElementById('postForm').reset();
});
