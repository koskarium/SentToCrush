const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const iframe = document.querySelector("iframe"); // Adjusted for the iframe

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
  question.innerHTML = "Perfect, I will pick you up at 8 pm PST";
  iframe.src = "https://giphy.com/embed/kDGfRao0AL7RfX1vZt";
  
//  // Create and insert a hyperlink
//  const link = document.createElement("a");
//  link.href = "https://maps.app.goo.gl/LC1hjRibcWdePddF6";
//  link.textContent = "1642 W Temple St, Los Angeles, CA 90026";
//  link.target = "_blank"; // Open in a new tab
//  link.style.display = "block"; // Ensure it displays below the iframe

  // Append the link below the iframe
//  question.appendChild(link);

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
