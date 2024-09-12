const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gifFrame = document.querySelector("iframe");

// Function to set the initial position of the No button next to the Yes button
function setInitialNoBtnPosition() {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  
  // Place the No button to the right of the Yes button
  noBtn.style.position = "absolute";
  noBtn.style.left = `${yesBtnRect.right + 10}px`; // 10px margin to the right
  noBtn.style.top = `${yesBtnRect.top}px`;  // Align the top of both buttons
}

// Function to move the No button to a random location near the Yes button
function moveNoBtnRandomly() {
  const btnGroup = document.querySelector(".btn-group");
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const btnGroupRect = btnGroup.getBoundingClientRect();
  
  // Calculate a random position close to the Yes button within the button group
  const maxX = btnGroupRect.width - noBtn.offsetWidth;
  const maxY = btnGroupRect.height - noBtn.offsetHeight;
  
  const randomX = Math.floor(Math.random() * (maxX / 2)) + (yesBtnRect.left - btnGroupRect.left + yesBtnRect.width + 10); // Added margin to avoid overlap
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
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

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Let us meet here";
  gifFrame.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGR3czZtZTVtZGZsN2lqZmsxbHE4NTFncTZmMzFqeWhuam01N2dzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Pj8VpvnuyNNK/giphy.gif";
  // Hide the Yes and No buttons
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
