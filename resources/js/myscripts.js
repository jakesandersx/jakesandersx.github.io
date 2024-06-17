var callback = function(){
    $('.item-skills').each(function(){
        newWidth = $(this).parent().width() * $(this).data('percent');
        $(this).width(0);
        $(this).animate({
            width: newWidth,
        }, 1000);
    });
};
$(document).ready(callback);

const slider = document.querySelector('.slider');
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100 + '%';
    slider.style.transform = 'translateX(' + offset + ')';
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentIndex);
}