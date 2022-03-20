let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(x) {
    showSlide(slideIndex += x);
}

function currentSlide(x) {
    showSlide(slideIndex = x);
}

function showSlide(x) {
    let slides = document.getElementsByClassName("card");
    let dots = document.getElementsByClassName("dot");
    if (x > slides.length) {
        slideIndex = 1;
    }
    if (x < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].style.backgroundColor="#bbb";
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor="black";
}