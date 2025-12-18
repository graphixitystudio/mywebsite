// Reveal animation
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach((el,i)=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      setTimeout(()=> el.classList.add("active"), i*120);
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Logo shrink on scroll
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});
