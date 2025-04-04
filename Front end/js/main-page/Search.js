import {Videos, fetchVideo} from './../fetchVideo.js';

async function fetchDatas() {
    await fetchVideo();
    const searchInput = document.querySelector('.search-input');

    searchInput.addEventListener('input', (event) => {
        const value = event.target.value.toLowerCase();
        
        const Result = Videos.filter(video =>
            video.Title.toLowerCase().includes(value) ||
            video.Channel.toLowerCase().includes(value) ||
            video.Category.toLowerCase().includes(value)
        );
        console.log(Result);
    })
}
fetchDatas();