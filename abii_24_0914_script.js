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

// Function to move the No button to a random location within a radius around the Yes button
function moveNoBtnRandomly() {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const radius = 100; // Radius around the Yes button
  
  // Calculate a random angle and distance within the radius
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * radius;
  
  const randomX = yesBtnRect.left + yesBtnRect.width / 2 + distance * Math.cos(angle) - noBtnRect.width / 2;
  const randomY = yesBtnRect.top + yesBtnRect.height / 2 + distance * Math.sin(angle) - noBtnRect.height / 2;

  // Ensure the No button stays within the container
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  
  if (randomX < wrapperRect.left) randomX = wrapperRect.left;
  if (randomX + noBtnRect.width > wrapperRect.right) randomX = wrapperRect.right - noBtnRect.width;
  if (randomY < wrapperRect.top) randomY = wrapperRect.top;
  if (randomY + noBtnRect.height > wrapperRect.bottom) randomY = wrapperRect.bottom - noBtnRect.height;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
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

// Make the No button move to a random location within a radius around the Yes button on hover
noBtn.addEventListener("mouseover", () => {
  moveNoBtnRandomly();
});

// Move the No button to a random location within a radius around the Yes button on click
noBtn.addEventListener("click", () => {
  moveNoBtnRandomly();
});
