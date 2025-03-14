// Access to html classes
const [likeBtn, likeIcon, likedIcon, dislikeBtn, dislikeIcon, dislikedIcon] =
    [...document.querySelectorAll('.action.like, .icon.like, .icon.liked, .action.dislike, .icon.dislike, .icon.disliked')];

// Function to toggle active state for Like & Dislike
function toggleReaction(activeIcon, inactiveIcon, oppositeIcon, oppositeActiveIcon) {
    const isActive = activeIcon.style.display === "block";

    // Toggle like/dislike visibility
    activeIcon.style.display = isActive ? "none" : "block";
    inactiveIcon.style.display = isActive ? "block" : "none";

    // Reset the opposite reaction
    oppositeActiveIcon.style.display = "none";
    oppositeIcon.style.display = "block";
}

likeBtn.addEventListener("click", () => toggleReaction(likedIcon, likeIcon, dislikeIcon, dislikedIcon));
dislikeBtn.addEventListener("click", () => toggleReaction(dislikedIcon, dislikeIcon, likeIcon, likedIcon));