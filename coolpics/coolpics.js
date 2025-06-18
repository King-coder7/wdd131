const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
  function toggleMenu() {
    menu.classList.toggle("hide");
  }

  menuButton.addEventListener("click", toggleMenu);
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  })