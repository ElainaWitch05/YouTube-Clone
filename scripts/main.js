document.addEventListener('DOMContentLoaded', function () {
    const videoGrid = document.querySelector('.video-grid');

    const videos = [
        {
            title: '2 Hour Beautiful Piano Music for Studying and Sleeping 【BGM】',
            thumbnail: 'https://i.ytimg.com/vi/HSOtku1j600/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhhiP4pdouxV8JI_5wwxfS2hkfUQ',
            description: '68 Tr lượt xem 7 năm trước',
        },
        {
            title: 'Video 2',
            thumbnail: 'path/to/thumbnail2.jpg',
            description: 'This is the description for video 2'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        {
            title: 'Video 3',
            thumbnail: 'path/to/thumbnail3.jpg',
            description: 'This is the description for video 3'
        },
        // Add more videos as needed
    ];

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            </div>
        `;

        videoGrid.appendChild(videoCard);
    });
});