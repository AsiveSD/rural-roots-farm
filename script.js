
    
    const images = ['assets/quality2.png','assets/quality4.png', 'assets/quality3.png','assets/quality6.png', 'assets/quality7.png'];
let currentIndex = 0;

function changeBackground() {
    document.querySelector('.slideshow').style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}


setInterval(changeBackground, 2000);



