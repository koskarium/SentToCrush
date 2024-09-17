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

// Change text, iframe, and add a hyperlink when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Let us meet here";
  
  // Remove the existing Tenor GIF embed
  tenorGifEmbed.style.display = "none";
  
  // Add a new iframe with Google Maps
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0491061622406!2d-118.26494162567225!3d34.06825541688703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7067649fab5%3A0x2b00aa39537f030!2s1642!5e0!3m2!1sen!2sus!4v1726261217356!5m2!1sen!2sus";
  iframe.width = "100%";
  iframe.height = "450"; // Adjust height as needed
  iframe.style.border = "0";
  
  // Create and insert a hyperlink
  const link = document.createElement("a");
  link.href = "https://maps.app.goo.gl/LC1hjRibcWdePddF6";
  link.textContent = "1642 W Temple St, Los Angeles, CA 90026";
  link.target = "_blank"; // Open in a new tab
  link.style.display = "block"; // Ensure it displays below the iframe

  // Append the iframe and link below the question
  question.innerHTML += `<br>`;
  question.appendChild(iframe);
  question.appendChild(link);

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
