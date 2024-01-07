const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let index = 0;

function run() {
    index++;

    if (index > img.length - 1) {
        index = 0;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(run, 2000);