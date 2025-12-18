const items = document.querySelectorAll(".reveal");

function revealOnScroll(){
  items.forEach((el,i)=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      setTimeout(()=> el.classList.add("active"), i*120);
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
