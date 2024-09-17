const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const tenorGifEmbed = document.querySelector(".tenor-gif-embed"); // Adjusted for the Tenor GIF

// Function to move the No button to a random location within its parent container
function moveNoBtnRandomly() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Initialize the No button position to avoid overlapping the Yes button
function setInitialNoBtnPosition() {
  const wrapper = document.querySelector(".wrapper");
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  let initialX, initialY;

  do {
    initialX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    initialY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
  } while (isOverlapping(initialX, initialY, noBtnRect.width, noBtnRect.height, yesBtnRect));

  noBtn.style.position = "absolute";
  noBtn.style.left = `${initialX}px`;
  noBtn.style.top = `${initialY}px`;
}

// Check if the No button is overlapping with the Yes button
function isOverlapping(x, y, noBtnWidth, noBtnHeight, yesBtnRect) {
  return !(x + noBtnWidth < yesBtnRect.left ||
           x > yesBtnRect.right ||
           y + noBtnHeight < yesBtnRect.top ||
           y > yesBtnRect.bottom);
}

// Set the initial position when the page loads
setInitialNoBtnPosition();

// Change text, hide GIF, and add a new Tenor GIF when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Perfrct, I'll pick you up at 8pm PST";
  
  // Remove the existing Tenor GIF embed
  if (tenorGifEmbed) {
    tenorGifEmbed.style.display = "none";
  }
  
  // Add a new Tenor GIF embed
  const newGifEmbed = document.createElement("div");
  newGifEmbed.className = "tenor-gif-embed";
  newGifEmbed.setAttribute("data-postid", "16978662");
  newGifEmbed.setAttribute("data-share-method", "host");
  newGifEmbed.setAttribute("data-aspect-ratio", "2.53968");
  newGifEmbed.setAttribute("data-width", "100%");
  newGifEmbed.innerHTML = `<a href="https://tenor.com/view/flying-mia-emma-stone-sebastian-wilder-ryan-gosling-gif-16978662">Flying Mia GIF</a> from <a href="https://tenor.com/search/flying-gifs">Flying GIFs</a>`;
  
  // Append the new Tenor GIF embed and script
  question.appendChild(newGifEmbed);
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://tenor.com/embed.js";
  document.body.appendChild(script);

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// Make the No button move to a random location within the parent container on hover
noBtn.addEventListener("mouseover", () => {
  moveNoBtnRandomly();
});

// Move the No button to a random location within the parent container on click
noBtn.addEventListener("click", () => {
  moveNoBtnRandomly();
});

// Optional: Reposition the No button on window resize
window.addEventListener("resize", setInitialNoBtnPosition);
