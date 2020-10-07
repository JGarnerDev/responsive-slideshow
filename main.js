var i = 0;
var slideShow = document.getElementById("slideshow");
var prevBtn = document.querySelectorAll("button")[0];
var nextBtn = document.querySelectorAll("button")[1];

var images = [
  "https://i.imgur.com/wdX8JBX.png",
  "https://i.imgur.com/oxLU13C.png",
  "https://i.imgur.com/k0G89LP.png",
];

var duration = 3000;

slideShow.style.backgroundImage = `url(${images[i]})`;

function nextImage() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-right");
  setTimeout(() => {
    slideShow.classList.remove("enter-right");
  }, 500);
}

function prevImage() {
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }
  slideShow.style.backgroundImage = `url(${images[i]})`;
  slideShow.classList.add("enter-left");
  setTimeout(() => {
    slideShow.classList.remove("enter-left");
  }, 500);
}

nextBtn.onclick = () => nextImage();
prevBtn.onclick = () => prevImage();
