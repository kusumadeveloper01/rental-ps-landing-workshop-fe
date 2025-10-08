let mobileMenu = document.getElementById("mobileMenu");

function openMobileMenu() {
  mobileMenu.classList.remove("-translate-y-full");
  mobileMenu.classList.add("-translate-y-0");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("-translate-y-0");
  mobileMenu.classList.add("-translate-y-full");
}
