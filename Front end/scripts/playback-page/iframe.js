const urlParams = new URLSearchParams(window.location.search);
const videoURL = urlParams.get('video');

if (videoURL) {
    document.querySelector(".videoFrame").src = decodeURIComponent(videoURL);
}