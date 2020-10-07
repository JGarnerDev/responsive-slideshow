var i = 0;
var slideShow = document.getElementById("slideshow");
var prevBtn = document.querySelectorAll("button")[0];
var nextBtn = document.querySelectorAll("button")[1];

var images = [
  "https://i.imgur.com/wdX8JBX.png",
  "https://i.imgur.com/oxLU13C.png",
  "https://i.imgur.com/k0G89LP.png",
];

let timeout;

slideShow.style.backgroundImage = `url(${images[i]})`;

function nextImage() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-right");
  if (timeout) {
    window.clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    window.slideShow.classList.remove("enter-right");
  }, 400);
}

function prevImage() {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }

  if (timeout) {
    window.clearTimeout(timeout);
  }
  timeout = window.setTimeout(() => {
    slideShow.classList.remove("enter-left");
  }, 400);

  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-left");
}

nextBtn.onclick = () => nextImage();
prevBtn.onclick = () => prevImage();
