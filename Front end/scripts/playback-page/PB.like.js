const dislikeBtn = document.querySelector('.action.dislike');
const dislikeIcon = document.querySelector('.icon.dislike');
const dislikedIcon = document.querySelector('.icon.disliked');

dislikeBtn.addEventListener("click", () => {
    if (dislikedIcon.style.display === 'block') {
        dislikedIcon.style.display = 'none';
        dislikeIcon.style.display = 'block';
    } else {
        dislikedIcon.style.display = 'block';
        dislikeIcon.style.display = 'none';
    }
});