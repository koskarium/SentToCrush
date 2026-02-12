const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const tenorGifEmbed = document.querySelector(".tenor-gif-embed");
const declarationText = document.querySelector(".declaration-text");

// Move "No" button randomly
function moveNoBtnRandomly() {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Initial position of No button
function setInitialNoBtnPosition() {
    const wrapper = document.querySelector(".wrapper");
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    let x, y;
    do {
        x = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
        y = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    } while (x < yesBtnRect.right && x + noBtnRect.width > yesBtnRect.left &&
             y < yesBtnRect.bottom && y + noBtnRect.height > yesBtnRect.top);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

setInitialNoBtnPosition();

// Yes button clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = `¡Yay! 💖 Sabía que dirías que sí. ¡Feliz San Valentín!`;
    if (declarationText) declarationText.style.display = "none";
    if (tenorGifEmbed) tenorGifEmbed.style.display = "none";

    const newGif = document.createElement("div");
    newGif.className = "tenor-gif-embed";
    newGif.setAttribute("data-postid", "16978662"); // GIF de celebración
    newGif.setAttribute("data-share-method", "host");
    newGif.setAttribute("data-aspect-ratio", "2.53968");
    newGif.setAttribute("data-width", "100%");
    newGif.innerHTML = `<a href="https://tenor.com/view/flying-mia-emma-stone-sebastian-wilder-ryan-gosling-gif-16978662">Flying GIF</a> from <a href="https://tenor.com/search/flying-gifs">Flying GIFs</a>`;
    
    question.appendChild(newGif);
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://tenor.com/embed.js";
    document.body.appendChild(script);

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Make No button run away
noBtn.addEventListener("mouseover", moveNoBtnRandomly);
noBtn.addEventListener("click", () => {
    alert("¡Ups! Parece que no puedes decir 'No' 😏");
    moveNoBtnRandomly();
});

// Reposition on resize
window.addEventListener("resize", setInitialNoBtnPosition);
