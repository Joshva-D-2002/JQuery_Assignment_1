$(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    showSlide(currentIndex);

    $('.controls').eq(0).click(function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });
    $('.controls').eq(1).click(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 10000);

});
