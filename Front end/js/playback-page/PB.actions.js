const subscribeaBtn = document.querySelector(".subscribe-button")

function ready () {
    subscribeaBtn.classList.toggle("subscribed")
    

    if (subscribeaBtn.classList.contains("subscribed")) {
        subscribeaBtn.textContent = "Subscribed"
        localStorage.setItem("isSub","subscribed")
    } else {
        subscribeaBtn.textContent = "Subscribe"
        localStorage.removeItem("isSub")
    }
};

if (localStorage.getItem("isSub") === "subscribed") {
    subscribeaBtn.classList.add("subscribed")
    subscribeaBtn.textContent = "Subscribed"
}else {
    subscribeaBtn.classList.remove("subscribed")
    subscribeaBtn.textContent = "Subscribe"
}

subscribeaBtn.addEventListener("click", ready);