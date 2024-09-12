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

// Change text and iframe when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Let us meet here";
  iframe.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6486.874441285227!2d-117.6707852!3d35.6169465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c16cc049a2bbb5%3A0x9b8bac93c8c04204!2sBest%20Western%20China%20Lake%20Inn!5e0!3m2!1sen!2sus!4v1726165902595!5m2!1sen!2sus";
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
