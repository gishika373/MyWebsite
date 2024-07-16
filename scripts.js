let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.children.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.children.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index - 1);
}