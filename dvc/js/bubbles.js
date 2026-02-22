const floatingContainer = document.getElementById("floating-container");

const schoolImages = [
    "images/pencil.png",
    "images/Rubber.png",
    "images/A.png",
    "images/bag.png",
    "images/B.png",
    "images/C.png",
    "images/Z.png"
];

function createFloatingItem() {

    const item = document.createElement("div");
    item.classList.add("floating-item");

    const img = document.createElement("img");
    img.src = schoolImages[Math.floor(Math.random() * schoolImages.length)];

    item.appendChild(img);

    item.style.left = Math.random() * 100 + "vw";
    item.style.bottom = "-60px";

    const size = Math.random() * 40 + 40; // 40px–80px
    item.style.width = size + "px";

    const duration = Math.random() * 5 + 7; // slower smooth float
    item.style.animationDuration = duration + "s";

    // POP FUNCTION
    item.addEventListener("click", function () {
        item.classList.add("pop");
        setTimeout(() => {
            item.remove();
        }, 200);
    });

    floatingContainer.appendChild(item);

    // Auto remove after animation
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

setInterval(createFloatingItem, 7000);