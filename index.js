const navAnimate = () => {
  const hamburgerBtn = document.querySelector(".hamburger");
  const navs = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  hamburgerBtn.addEventListener("click", () => {
    navs.classList.toggle("nav-open");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
  });
};

navAnimate();
