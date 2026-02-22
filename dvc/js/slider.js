let images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpg", "images/image11.jpg"];
let index = 0;

setInterval(function() {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
}, 3000);