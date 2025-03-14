# YouTube Long & Short Video Grid Responsive System

## Overview
The **YouTube Long & Short Video Grid Responsive System** is a dynamic layout designed to handle both standard YouTube videos and short-form reels seamlessly. The system automatically adjusts the number of videos per row based on the screen width, ensuring an optimized viewing experience for all devices.

## How It Works
1. **Dynamic Video Grid** - The system arranges long videos into two separate containers and moves them under short videos as the screen size decreases.
2. **Automatic Adjustments** - As the screen resizes, the layout recalculates and redistributes the videos using `appendChild()` for long videos.
3. **Shorts Handling** - Short videos are placed in a separate container that adapts to screen size by dynamically **removing** videos one by one when reducing the screen width and **adding** them back when increasing.
4. **Performance Optimization** - Hides excess videos and short clips dynamically to improve performance and user experience.

## Implementation
### HTML Structure
```html
<div class="content-container">
    <!-- Video Grid Container 1 -->
    <div class="video-grid" id="videoGrid1">
        <div class="video-item">Video 1</div>
        <div class="video-item">Video 2</div>
    </div>
    
    <!-- Shorts Section -->
    <div class="shorts-container" id="shortsContainer">
        <div class="short-video">Short 1</div>
        <div class="short-video">Short 2</div>
    </div>
    
    <!-- Video Grid Container 2 -->
    <div class="video-grid" id="videoGrid2">
        <div class="video-item">Video 3</div>
        <div class="video-item">Video 4</div>
    </div>
</div>
```

### JavaScript for Dynamic Layout Adjustment
```js
function adjustLayout() {
    const shortsContainer = document.getElementById("shortsContainer");
    const shorts = Array.from(shortsContainer.children);

    const contentContainer = document.querySelector(".content-container"); // Parent container for rows
    const allVideos = [...document.querySelectorAll(".video-item")];

    const screenWidth = document.documentElement.getBoundingClientRect().width;
    const maxVideosPerRow = Math.floor(screenWidth / 300);
    const maxShortsPerRow = Math.floor(screenWidth / 150);

    // Hide Shorts one by one when reducing screen size
    shorts.forEach((short, index) => {
        if (index >= maxShortsPerRow) {
            short.style.display = "none";
        } else {
            short.style.display = "flex";
        }
    });

    // Clear previous video rows (except shorts row)
    document.querySelectorAll(".video-grid").forEach(row => row.remove());

    let rows = [];
    let currentRow = document.createElement("div");
    currentRow.classList.add("video-grid");
    contentContainer.insertBefore(currentRow, shortsContainer); // Insert before shorts

    let videosInRow = 0;

    allVideos.forEach((video, index) => {
        if (videosInRow < maxVideosPerRow) {
            currentRow.appendChild(video);
            videosInRow++;
        } else {
            // Create a new row when the previous one is full
            currentRow = document.createElement("div");
            currentRow.classList.add("video-grid");
            contentContainer.appendChild(currentRow); // Add it to container
            currentRow.appendChild(video);
            videosInRow = 1;
        }
    });
}

// Run on page load and when window resizes
window.addEventListener("resize", adjustLayout);
window.addEventListener("load", adjustLayout);

```

## Benefits
- **Fully Responsive**: Adjusts seamlessly to different screen sizes.
- **Dynamic Content Management**: Moves long videos below shorts and removes short videos dynamically based on screen width.
- **Performance Efficient**: Hides unnecessary elements to improve page load speed.
- **Scalability**: Easily supports more videos and shorts without affecting layout integrity.
- **Better User Experience**: Keeps content well-organized and accessible on all devices.

## Conclusion
This responsive system is essential for video platforms that handle both long and short videos. By leveraging JavaScript-based dynamic layout adjustments using `appendChild()`, the system enhances user engagement and optimizes performance across devices.

