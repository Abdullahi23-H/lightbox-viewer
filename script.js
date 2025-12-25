const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    let fullsizeSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullsizeSrc;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
