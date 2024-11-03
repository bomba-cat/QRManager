// Mock list of images in the "img/" folder (replace with actual file listing if available server-side)
const imageFiles = ["first.jpg", "second.jpg", "third.webp", "fifth.jpg"]; // Replace with actual filenames

// Select the gallery container
const galleryContainer = document.getElementById("galleryContainer");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");
const closeButton = document.getElementById("closeButton");

// Function to create image boxes
function createImageBox(filename) {
  const box = document.createElement("div");
  box.className = "image-box";
  box.addEventListener("click", () => openFullscreen(filename));

  const img = document.createElement("img");
  img.src = `img/${filename}`;
  img.alt = filename;

  const title = document.createElement("div");
  title.className = "image-title";
  title.textContent = filename;

  box.appendChild(img);
  box.appendChild(title);

  return box;
}

// Function to load images
function loadImages() {
  imageFiles.forEach(filename => {
    const imageBox = createImageBox(filename);
    galleryContainer.appendChild(imageBox);
  });
}

// Function to open image in fullscreen
function openFullscreen(filename) {
  fullscreenImage.src = `img/${filename}`;
  fullscreenOverlay.style.display = "flex";
}

// Function to close fullscreen view
function closeFullscreen() {
  fullscreenOverlay.style.display = "none";
}

// Event listener to close fullscreen on button click
closeButton.addEventListener("click", closeFullscreen);

// Initial load
loadImages();
closeFullscreen();
