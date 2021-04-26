const slides = document.querySelectorAll(".marketing__slider-item");
const dots = document.querySelectorAll(".slider-dot");

console.log(slides)
slides.forEach((slide, index) => {
  slide.addEventListener("mouseover", (e) => {
  
    console.log(`hello ${index}`)
    slide.classList.toggle('current-slide')
    dots[index].classList.toggle('current-dot')
  });
});
