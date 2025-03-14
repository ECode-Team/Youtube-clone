const subscribe = document.querySelector(".subscribe-btn");

function change() {
  subscribe.classList.toggle("child");

  if (subscribe.classList.contains("child")) {
    subscribe.textContent = "subscribed";
    localStorage.setItem("isSub", "child");
  } else {
    subscribe.textContent = "Subscribe";
    localStorage.removeItem("isSub");
  }
}

if (localStorage.getItem("isSub") === "child") {
  subscribe.classList.add("child");
  subscribe.textContent = "subscribed";
} else {
  subscribe.classList.remove("child");
  subscribe.textContent = "Subscribe";
}

subscribe.addEventListener("click", change);
