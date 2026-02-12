const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const valentineGif = document.querySelector(".valentine-gif");
const declarationText = document.querySelector(".declaration-text");

// Mueve el botón "No" aleatoriamente
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

// Posición inicial del botón "No"
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

// Acción al hacer clic en "Sí"
yesBtn.addEventListener("click", () => {
    question.innerHTML = `¡Yay! 💖 Sabía que dirías que sí. ¡Feliz San Valentín!`;
    if (declarationText) declarationText.style.display = "none";
    if (valentineGif) valentineGif.style.display = "none";

    // GIF de celebración (puedes usar otro Giphy si quieres)
    const giphyGif = document.createElement("img");
    giphyGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBhNWoxeG44NmN3dzVjNzhiZWF1dGQ2eDE3MzJ0NWtvNDZiZXFnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UX5hm0jhM2RvbzuE0t/giphy.gif";
    giphyGif.alt = "Celebration GIF";
    giphyGif.style.maxWidth = "300px";
    giphyGif.style.margin = "20px auto";
    giphyGif.style.display = "block";

    question.appendChild(giphyGif);

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

// Botón "No" huye al pasar el mouse
noBtn.addEventListener("mouseover", moveNoBtnRandomly);
noBtn.addEventListener("click", () => {
    alert("¡Ups! Parece que no puedes decir 'No' 😏");
    moveNoBtnRandomly();
});

// Reposicionar al redimensionar
window.addEventListener("resize", setInitialNoBtnPosition);
