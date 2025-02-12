//Access to html classess
const profileMenu = document.querySelector('.profile-menu');
const profileBtn = document.querySelector('.profile-pic');
const appearance = document.querySelector('.menu-item-2.Appearance');
const themeToggle = document.querySelector('.theme-toggle');
const backFlash = document.querySelector('.theme-back-flash');
const deviceTick = document.querySelector('.theme-tick.device');
const darkTick = document.querySelector('.theme-tick.dark');
const lightTick = document.querySelector('.theme-tick.light');
const deviceTheme = document.querySelector('.theme-Mode.device');
const darkTheme = document.querySelector('.theme-Mode.dark');
const lightTheme = document.querySelector('.theme-Mode.light');

profileBtn.addEventListener('click', () => {
    profileMenu.classList.toggle('profile-opend')
});

profileMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Dont effect parrent (profile button) when clicked
});

document.addEventListener('click', (event) => {
    if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target) && !backFlash.contains(event.target)) {
        profileMenu.classList.remove('profile-opend');
    }
});

appearance.addEventListener('click', () => {
    profileMenu.classList.remove('profile-opend');
    themeToggle.classList.add('opend')
});

document.addEventListener('click', (event) => {
    if (!themeToggle.contains(event.target)) {
        themeToggle.classList.remove('opend')
    }
});

backFlash.addEventListener('click', () => {
    themeToggle.classList.remove('opend');
    profileMenu.classList.add('profile-opend');
});

deviceTheme.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});

darkTheme.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});