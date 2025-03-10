const like = document.querySelector(".icon.like");
const dislike = document.querySelector(".icon.dislike");

function toggleLike(element, child, opposite, oppositeChild) {
    return () => {
        element.classList.toggle(child); // دکمه‌ی کلیک شده را تغییر وضعیت بده

        if (opposite.classList.contains(oppositeChild)) {
            opposite.classList.remove(oppositeChild); // دکمه‌ی مخالف را غیرفعال کن
        }
    };
}

like.addEventListener("click", toggleLike(like, "liked", dislike, "disliked"));
dislike.addEventListener("click", toggleLike(dislike, "disliked", like, "liked"));
