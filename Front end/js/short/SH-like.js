const like = document.querySelector(".icon.like");
const dislike = document.querySelector(".icon.dislike");

function toggleLike(element, child, opposite, oppositeChild) {
    return () => {
        const change = element.classList.toggle(child);

        if (change) {
            opposite.classList.remove(oppositeChild);
            localStorage.setItem("isLike", child);
        } else {
            localStorage.removeItem("isLike");
        }
    };
}

const chek = localStorage.getItem("isLike")

if (chek === "liked") {
    like.classList.add("liked");
    
} else if (chek === "disliked") {
    dislike.classList.add("disliked")
    
} else {
    like.classList.remove("liked");
    dislike.classList.remove("disliked")
}

like.addEventListener("click", toggleLike(like, "liked", dislike, "disliked"));
dislike.addEventListener("click", toggleLike(dislike, "disliked", like, "liked"));
