const subscribe = document.querySelector(".subscribe-btn");

function change() {
  subscribe.classList.toggle("child");
  
  if (subscribe.classList.contains("child")) {
    subscribe.textContent = "subscribed";
    localStorage.setItem("isSub", "true");
  } else {
    subscribe.textContent = "Subscribe";
    localStorage.setItem("isSub", "false");
  }
}

if (localStorage.getItem("isSub") === "true") {
    subscribe.classList.add("child")
    subscribe.textContent = "subscribed";
  }else {
    subscribe.textContent = "Subscribe";
    subscribe.classList.remove("child")
  }

subscribe.addEventListener("click", change);
