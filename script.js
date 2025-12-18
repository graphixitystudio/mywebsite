const reveals = document.querySelectorAll(".reveal");

function animateOnScroll() {
  reveals.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, i * 120);
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
