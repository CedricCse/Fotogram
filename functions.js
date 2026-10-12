let currentImageIndex = 0;

function openImage(index) {
    currentImageIndex = index;

    updateDialog();

    document.getElementById("image-dialog").showModal();
}

function closeImage() {
    document.getElementById("image-dialog").close();
}

function updateDialog() {
    let dialogImage = document.getElementById("dialog-image");
    let dialogTitle = document.getElementById("dialog-title");
    let imageCounter = document.getElementById("image-counter");

    dialogImage.src = myImgs[currentImageIndex];

    let fileName = myImgs[currentImageIndex].split("/").pop();

    dialogTitle.textContent = fileName;
    dialogImage.alt = fileName;
    imageCounter.textContent = `${currentImageIndex + 1}/${myImgs.length}`;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % myImgs.length;
    updateDialog();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + myImgs.length) % myImgs.length;
    updateDialog();
}

let dialog = document.getElementById("image-dialog");

dialog.addEventListener("click", function(event) {
    if (event.target === dialog) {
        closeImage();
    }
});

document.addEventListener("keydown", function(event) {
    let dialog = document.getElementById("image-dialog");

    if (!dialog.open) {
        return;
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
    }
});