document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  const slideWidth = slides[0].clientWidth;

  function goToSlide(index) {
    container.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
  }

  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  });
});
