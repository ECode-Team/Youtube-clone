//Access to html classess
const [profileBtn, themeToggle, backFlash, deviceTheme, deviceTick, darkTheme, darkTick, lightTheme, lightTick, profileMenu, appearance] = [...document.querySelectorAll('.profile-pic, .theme-toggle, .theme-back-flash, .theme-Mode.device, .theme-tick.device, .theme-Mode.dark, .theme-tick.dark, .theme-Mode.light, .theme-tick.light, .profile-menu, .menu-item-2.Appearance')];

// Appearance window system
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

// Appearance system with local storage
localStorage.getItem('DarkMode') === 'true' ? setAppearance(true, [1, 0, 0]) : setAppearance(false, [0, 0, 1]);

function setAppearance(isDark, [D, DV, L]) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    darkTick.style.opacity = `${D}`;
    deviceTick.style.opacity = `${DV}`;
    lightTick.style.opacity = `${L}`;
    localStorage.setItem('DarkMode', `${isDark}`)
}

deviceTheme.addEventListener('click', () => setAppearance(false, [0, 1, 0]));
darkTheme.addEventListener('click', () => setAppearance(true, [1, 0, 0]));
lightTheme.addEventListener('click', () => setAppearance(false, [0, 0, 1]));