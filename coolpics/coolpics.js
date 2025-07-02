

// ===== MENU TOGGLE =====
const menuButton = document.getElementById("menu-button");
const navMenu = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

// ===== RESPONSIVE MENU RESET ON RESIZE =====
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove("hide");
  } else {
    navMenu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// ===== MODAL IMAGE VIEWER WITH DIALOG =====
const gallery = document.querySelector(".gallery");
const modal = document.getElementById("viewer");
const modalImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (img) {
    modalImg.src = img.src;

    modalImg.alt = img.alt;
    modal.showModal();
  }
});

closeBtn.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
