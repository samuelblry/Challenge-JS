let dvd = document.getElementById("dvd");
let dvdSvg = document.getElementById("dvdSvg");

const color = ["red", "blue", "yellow", "green"]

let indexColor = 1

let x = 0;
let y = 0;

let decalageX = 2;
let decalageY = 2;

function moov() {
    const maxX = window.innerWidth - dvd.offsetWidth;
    const maxY = window.innerHeight - dvd.offsetHeight + 75;

    x += decalageX;
    y += decalageY;

    if (x <= 0 || x >= maxX) {
        decalageX = -decalageX;
        dvdSvg.style.fill = color[indexColor]
        if (indexColor >= color.length -1) {
                indexColor = 0
        } else {
                indexColor += 1
        }
    }

    if (y <= -75 || y >= maxY) {
        decalageY = -decalageY;
        dvdSvg.style.fill = color[indexColor]
        if (indexColor >= color.length -1) {
                indexColor = 0
        } else {
                indexColor += 1
        }
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(moov);
}

requestAnimationFrame(moov);
