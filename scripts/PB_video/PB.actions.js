// Function to initialize a button dynamically
const initializeButton = (Class, TextTag, ClassTag, activeText = null, inactiveText = null, NewClass) => {
    // Access the HTML button
    const Button = document.querySelector(Class);

    // Add active class if button wasnt pressed before
    if (localStorage.getItem(ClassTag) === 'true') {
        Button.classList.add(NewClass);
    }

    // If button has text
    if (activeText && inactiveText) {
        // Get text from local storage
        Button.textContent = localStorage.getItem(TextTag) || inactiveText;
    }
    
    // Change text and add/remove class
    const UpdateButton = () => {
        // CanSubscribe become true when the button is not NewClass
        const NotPressed = !Button.classList.contains(NewClass);
        Button.classList.toggle(NewClass, NotPressed);

        // Only execute function when activeText and inactiveText exist
        if (activeText && inactiveText) {
            Button.textContent = NotPressed ? activeText : inactiveText;
            localStorage.setItem(TextTag, Button.textContent);
        }

        // Set class in local storage
        localStorage.setItem(ClassTag, NotPressed ? 'true' : 'false');
    };

    // Call function on button click
    Button.addEventListener('click', UpdateButton);
};

// Call Function
initializeButton('.subscribe-button', 'TGSubscribeText', 'TGSubscribeClass', 'subscribed', 'subscribe', 'subscribed');
initializeButton('.action.like', null, 'TGLikeclass', null, null, 'liked');