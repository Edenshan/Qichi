let currentVideo = 0;
const videos = document.querySelectorAll('.video-container iframe');

function nextVideo() {
  // Hide current video
  videos[currentVideo].style.display = 'none';
  
  // Show next video
  currentVideo = (currentVideo + 1) % videos.length;
  videos[currentVideo].style.display = 'block';
}
