document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    let index = 0;
    const images = carousel.querySelectorAll('img');
    if (images.length === 0) return;
    images[0].classList.add('active');
    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 3000);
  });
});