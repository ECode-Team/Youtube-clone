import {videoElementsArray, loadVideos} from './gen-long-video.js';

export function adjustLayout() {
    // Access to html elements
    const [container, shortContainer, shortSection] = [...document.querySelectorAll('.content-container, .Short-video-container, .Short-video-section')];
    const shorts = Array.from(shortSection.children);
    const screenWith = document.querySelector('.content-container').getBoundingClientRect().width;
    
    // Calculate max short per row
    const maxShortPerRow = Math.round(screenWith / 260);
    const maxLongPerRow = Math.round(screenWith / 370);

    // Shorts responsive
    shorts.forEach((short, index) => {
        if (index >= maxShortPerRow) {
            short.style.display = 'none';
        } else {
            short.style.display = 'flex';
        }
    });

    // Delete video grid for update again
    document.querySelectorAll('.video-grid').forEach((row) => {
        row.remove();
    });

    // Create video grid and place it top of the short container
    let currentRow = document.createElement('div');
    currentRow.classList.add('video-grid');
    container.insertBefore(currentRow, shortContainer);

    let videoPerRow = 0;
    videoElementsArray.forEach((video) => {
        if (videoPerRow < maxLongPerRow) {
            currentRow.appendChild(video);
            videoPerRow++;
        } else {
            currentRow = document.createElement('div');
            currentRow.classList.add('video-grid');
            container.appendChild(currentRow);
            currentRow.appendChild(video);
            videoPerRow = 1;
        }
    });
}

// Wait for videos to be generate
async function initialize() {
    await loadVideos();
    adjustLayout();
}

window.addEventListener('load', initialize);
window.addEventListener('resize', adjustLayout);