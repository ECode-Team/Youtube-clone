const urlParams = new URLSearchParams(window.location.search);
const videoURL = urlParams.get('short');

if (videoURL) {
    document.querySelector(".shortFrame").src = decodeURIComponent(videoURL);
}