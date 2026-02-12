const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const valentineGif = document.querySelector(".valentine-gif");
const declarationText = document.querySelector(".declaration-text");

// Función para mover el botón No aleatoriamente
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

// Posición inicial del botón No
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

// Cuando se hace clic en Yes
yesBtn.addEventListener("click", () => {
    // Esconde el primer GIF y el texto
    if (valentineGif) valentineGif.style.display = "none";
    if (declarationText) declarationText.style.display = "none";

    // Cambia el mensaje
    question.innerHTML = `¡Yay! 💖 Sabía que dirías que sí. ¡Feliz San Valentín!`;

    // Oculta botones
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Agrega GIF de celebración
    const giphyGif = document.createElement("img");
    giphyGif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBhNWoxeG44NmN3dzVjNzhiZWF1dGQ2eDE3MzJ0NWtvNDZiZXFnNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UX5hm0jhM2RvbzuE0t/giphy.gif";
    giphyGif.alt = "Celebration GIF";
    giphyGif.style.maxWidth = "300px";
    giphyGif.style.margin = "20px auto";
    giphyGif.style.display = "block";
    question.appendChild(giphyGif);

    // Opcional: enviar timestamp a Google Form
    /*
    const timestamp = new Date().toISOString();
    const formURL = `https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse?entry.123456=${encodeURIComponent(timestamp)}`;
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = formURL;
    document.body.appendChild(iframe);
    */
});

// Botón No huye
noBtn.addEventListener("mouseover", moveNoBtnRandomly);
noBtn.addEventListener("click", () => {
    alert("¡Ups! Parece que no puedes decir 'No' 😏");
    moveNoBtnRandomly();
});

// Reposicionar al redimensionar
window.addEventListener("resize", setInitialNoBtnPosition);
