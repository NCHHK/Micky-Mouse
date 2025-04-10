let images = ["chickenplate.jpg", "chickenroast.jpg"];
let index = 0;

function changeImage() {
    const sliderImage = document.getElementById("sliderImage");
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}

setInterval(changeImage, 3000); // Change every 3 seconds
