import { Videos, fetchVideo } from "../fetchVideo.js";
export const videoElementsArray = [];

export async function loadVideos() {
  await fetchVideo();
  // Access to html elements
  const videoGrid = document.querySelector(".video-grid");

  Videos.forEach((video) => {
    const videoElement = document.createElement("a");
    videoElement.href = `video.html?video=${encodeURIComponent(video.link)}`;
    videoGrid.appendChild(videoElement);

    videoElement.innerHTML = `<div class="video-preview">
        <!--thumbnail-->
        <div class="thumbnail-row">
          <img class="thumbnail" src="${video.Thumbnail}" />
          <div class="video-time">9:30</div>
        </div>
        <div class="video-info-grid">
          <div class="channel-picture">
            <img class="profile-picture" src="imgs/profiles/unnamed.jpg" />
          </div>
          <div class="video-info">
            <div class="video-title">
              <span>${video.Title}</span>
              <img src="imgs/Icons/Shorts video/menu-icon.svg">
            </div>
            <p class="video-author">${video.Channel}</p>
            <p class="video-stats">${video.Views}</p>
          </div>
        </div>
      </div>`

    videoElementsArray.push(videoElement);
  })
}