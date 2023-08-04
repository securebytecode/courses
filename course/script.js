const videoPlayer = document.querySelector('.video-wrapper iframe');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

const videoUrls = [
    
    "https://player.vimeo.com/video/650519211",
    "https://player.vimeo.com/video/650519235",
    "https://player.vimeo.com/video/650519460",
    "https://player.vimeo.com/video/650519746",
    "https://player.vimeo.com/video/650519844",
    "https://player.vimeo.com/video/650519961",
    "https://player.vimeo.com/video/650520185",
    "https://player.vimeo.com/video/650520353",
    "https://player.vimeo.com/video/650520550",
    "https://player.vimeo.com/video/650520689",
    
];

let currentVideoIndex = 0;

function loadVideo(index) {
    if (index >= 0 && index < videoUrls.length) {
        const videoUrl = videoUrls[index];
        videoPlayer.src = videoUrl;
        currentVideoIndex = index;
    }
}

prevButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    loadVideo(currentVideoIndex);
});

nextButton.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    loadVideo(currentVideoIndex);
});

// Load the first video by default
loadVideo(currentVideoIndex);
