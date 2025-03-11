const like = document.querySelector(".icon.like");
const dislike = document.querySelector(".icon.dislike");

function toggleLike(element, child, opposite, oppositeChild) {
    return () => {
        element.classList.toggle(child);

        if (opposite.classList.contains(oppositeChild)) {
            opposite.classList.remove(oppositeChild);
        }
    };
}

like.addEventListener("click", toggleLike(like, "liked", dislike, "disliked"));
dislike.addEventListener("click", toggleLike(dislike, "disliked", like, "liked"));
