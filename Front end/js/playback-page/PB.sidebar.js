const menuBtn = document.querySelector(".menu-btn")
const sidebar = document.querySelector(".sidebar-container")
const coverblack = document.querySelector(".cover-black")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close")
    coverblack.classList.toggle("active")
});

coverblack.addEventListener('click', () => {
    coverblack.classList.remove("active")
    sidebar.classList.add("close")
});