const share = document.querySelector(".action.share");
const boxShare = document.querySelector(".box-share");
const shadowShare = document.querySelector(".cover-black");

  share.addEventListener("click", () => {
    boxShare.classList.add("active")
    shadowShare.classList.add("active")
  });

  shadowShare.addEventListener("click",  () => {
    boxShare.classList.remove("active")
    shadowShare.classList.remove("active")
  });
