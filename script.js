let images = ["https://learn.oncampus.ac.uk/courses/364/files/28011?module_item_id=47169", "https://learn.oncampus.ac.uk/courses/364/files/28010?module_item_id=4441"];
let index = 0;

function changeImage() {
    const sliderImage = document.getElementById("sliderImage");
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}

setInterval(changeImage, 3000); // Change every 3 seconds
