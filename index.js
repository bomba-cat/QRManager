// Mock list of images in the "img/" folder (replace with actual file listing if available server-side)
const imageFiles = ["Skender Morina", "Fatmir Ramaj"]; // Replace with actual filenames

// DOM Elements
const galleryContainer = document.getElementById("galleryContainer");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");
const closeButton = document.getElementById("closeButton");
const submitButton = document.getElementById("passsubmit");
const loginPrompt = document.getElementById("login");
const passwordInput = document.getElementById("pass");
const wrongPasswordMessage = document.getElementById("wrong");

// Hide the wrong password message initially
wrongPasswordMessage.style.display = "none";

// Function to create and return an image box element
function createImageBox(filename) {
  const box = document.createElement("div");
  box.className = "image-box";
  box.addEventListener("click", () => openFullscreen(filename));

  const img = document.createElement("img");
  img.src = `img/${filename}.jpg`;
  img.alt = filename;

  const title = document.createElement("div");
  title.className = "image-title";
  title.textContent = filename;

  box.appendChild(img);
  box.appendChild(title);

  return box;
}

// Function to load and display all images in the gallery
function loadImages() {
  imageFiles.forEach(filename => {
    const imageBox = createImageBox(filename);
    galleryContainer.appendChild(imageBox);
  });
}

// Function to open an image in fullscreen mode
function openFullscreen(filename) {
  fullscreenImage.src = `img/${filename}.jpg`;
  fullscreenOverlay.style.display = "flex";
}

// Function to close the fullscreen overlay
function closeFullscreen() {
  fullscreenOverlay.style.display = "none";
}

// Function to display the gallery upon correct password entry
function access() {
  loginPrompt.style.display = "none";
  galleryContainer.style.display = "block";
}

// Function to show an error message for incorrect password
function deny() {
  wrongPasswordMessage.style.display = "block";
  passwordInput.value = "";
}

// Function to check if the entered password is correct
function checkPass() {
  const input = passwordInput.value;

  if (input === "fcsg24") {
    access();
  } else {
    deny();
  }
}

// Event listener to close fullscreen view on close button click
closeButton.addEventListener("click", closeFullscreen);

// Event listener to check password on submit button click
submitButton.addEventListener("click", checkPass);

// Initial setup to load images and hide the fullscreen overlay
loadImages();
closeFullscreen();
