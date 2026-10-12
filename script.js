let myImgs = [
    "./assets/images/berg.png",
    "./assets/images/stadt.png",
    "./assets/images/wolken.png",
    "./assets/images/vogel.png",
    "./assets/images/erde.png",
    "./assets/images/see.png",
    "./assets/images/ente.png",
    "./assets/images/mensch.png",
    "./assets/images/vogel2.png",
    "./assets/images/gepard.png",
    "./assets/images/berge.png",
    "./assets/images/baum.png"
];

let imageDescriptions = [
    "Berglandschaft",
    "Stadt bei Nacht",
    "Wolken am Himmel",
    "Vogel in der Natur",
    "Ansicht der Erde",
    "See zwischen Bergen",
    "Ente auf dem Wasser",
    "Person in einer Landschaft",
    "Vogel in der Natur",
    "Gepard in der Wildnis",
    "Berglandschaft mit See",
    "Baum in einer Landschaft"
];

function renderGallery() {
    let gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    for (let i = 0; i < myImgs.length; i++) {
        gallery.innerHTML += `
            <button
                class="gallery-button"
                onclick="openImage(${i})"
                aria-label="${imageDescriptions[i]} vergrößern"
            >
                <img
                    src="${myImgs[i]}"
                    alt="${imageDescriptions[i]}"
                >
            </button>
        `;
    }
}

renderGallery();