let player;
let currentVideo = 0;
let autoSlide;

const videos = [
    {
        id: "I90wZp-YA4U",
        title: "Annual Day 2025-26 - Introduction",
        text: "A beautiful opening performance by our kindergarten students."
    },
    {
        id: "on3BmXlHbQM",
        title: "Dance Performance",
        text: "Our young stars presenting a soulful and devotional cultural performance."
    },
    {
        id: "B9093B4fNXk",
        title: "Pathak Performance",
        text: "Celebrate the energy and joy of our pre-primary students in this special Pathak."
    }
];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '350',
        width: '100%',
        videoId: videos[currentVideo].id,
        playerVars: { autoplay: 0 },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    startAutoSlide();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        clearInterval(autoSlide);
    }

    if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
        startAutoSlide();
    }
}

function startAutoSlide() {
    autoSlide = setInterval(nextVideo, 10000);
}

function updateVideo() {
    if (!player) return;
    player.cueVideoById(videos[currentVideo].id);
    document.getElementById("video-title").innerText = videos[currentVideo].title;
    document.getElementById("video-text").innerText = videos[currentVideo].text;
}

function nextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    updateVideo();
}

function prevVideo() {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    updateVideo();
}
