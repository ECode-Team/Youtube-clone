import {videoElementsArray} from './gen-long-video.js';

function adjustLayout() {
    // Access to html elements
    const shortContainer = document.querySelector('.Short-video-section');
    const shorts = Array.from(shortContainer.children);
    const screenWith = document.querySelector('.Short-video-container').getBoundingClientRect().width;
    
    // Calculate max short per row
    const maxShortPerRow = Math.floor(screenWith / 270);
    
    shorts.forEach((short, index) => {
        if (index > maxShortPerRow) {
            short.style.display = 'none';
        } else {
            short.style.display = 'flex';
        }
    });
}

window.addEventListener('resize', adjustLayout);
adjustLayout();