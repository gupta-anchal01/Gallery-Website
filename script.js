// Open modal with selected image
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Delete image from gallery
function deleteImage(index) {
    var gallery = document.getElementById("gallery-grid");
    var imageWrappers = gallery.getElementsByClassName("thumbnail-wrapper");
    imageWrappers[index].style.display = "none"; // Hide the image
}
