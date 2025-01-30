// Access to html class
const SubscribeButton = document.querySelector('.subscribe-button');

// If value was in cache
SubscribeButton.textContent = localStorage.getItem('SubscribeText') || 'subscribe';
// If the value in cache was subscribed
if (localStorage.getItem('IsSubscribed') === 'true') {
    SubscribeButton.classList.add('subscribed');
}

// Change text and add/remove class
function UpdateSubscribeButton() {
    const canSubscribe = SubscribeButton.textContent === 'subscribe';
    SubscribeButton.classList.toggle('subscribed' , canSubscribe);
    SubscribeButton.textContent = canSubscribe ? 'subscribed' : 'subscribe';
    // Set items in cache
    localStorage.setItem('IsSubscribed', canSubscribe ? 'true' : 'false');
    localStorage.setItem('SubscribeText', SubscribeButton.textContent);
}

// Call function on button clicked
SubscribeButton.addEventListener('click', UpdateSubscribeButton);