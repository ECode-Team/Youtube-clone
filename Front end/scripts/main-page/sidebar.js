const menuBtn = document.querySelector(".menu-btn")
const sidebar = document.querySelector(".sidebar-container")
const body = document.querySelector("body")
const topic = document.querySelector(".topic-bar-container")
const hr = document.querySelector(".hr-between")


menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed")
    body.classList.toggle("closed")
    topic.classList.toggle("closed")
    hr.classList.toggle("closed")
});