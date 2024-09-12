const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
// We are using iframe now
// const gif = document.querySelector(".gif");
const gifFrame = document.querySelector("iframe");


// Function to move the No button to a random location within its parent container
function moveNoBtnRandomly() {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width - 10; // 10px margin to avoid edges
  const maxY = wrapperRect.height - noBtnRect.height - 10; // 10px margin to avoid edges

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Initialize the No button position to avoid overlapping the Yes button
function setInitialNoBtnPosition() {
  const wrapper = document.querySelector(".wrapper");
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate initial position of No button to avoid overlapping with Yes button
  let initialX, initialY;

  do {
    initialX = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    initialY = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
  } while (isOverlapping(initialX, initialY, noBtnRect.width, noBtnRect.height, yesBtnRect));

  noBtn.style.position = "absolute";
  noBtn.style.left = initialX + "px";
  noBtn.style.top = initialY + "px";
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
  gifFrame.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGR3czZtZTVtZGZsN2lqZmsxbHE4NTFncTZmMzFqeWhuam01N2dzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Pj8VpvnuyNNK/giphy.gif"
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