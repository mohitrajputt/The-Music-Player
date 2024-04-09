alert('This Website only for desktop view');

function playlist() {
  window.location.href = "playlist.html";
}

function playmusic() {
  document.getElementsByClassName("music-player")[0].style.display = "block";
  let play = document.getElementsByTagName("audio")[0];
  play.autoplay = true;
  play.load();
}

// auto image slider

const slides = document.querySelectorAll(".trending-music .slide-show");
const intervalTime = 3000; // Time in milliseconds between slides
let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

setInterval(nextSlide, intervalTime); // Auto slide every 3 seconds

// Initial display
showSlide(slideIndex);
