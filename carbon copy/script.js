function changeOrderImages() {
    if (document.getElementById("image").style.flexDirection == "row-reverse") {
        document.getElementById("image").style.flexDirection = "row";
    } else {
        document.getElementById("image").style.flexDirection = "row-reverse"
    }
}

function introduceYourself() {
    document.getElementById("introduceYourself").style.display = "none"
    document.getElementById("name").style.display = "none"
    document.getElementById("phraseBienvenue").textContent = "Nice to meet you " + document.getElementById("name").value + " 👋! Thanks for introducing yourself."
}

function popup(title, subtitle, text) {
    document.getElementById("overlay").style.display = "block"
    document.getElementById("popup").style.display = "block"
    document.getElementById("popupTitle").textContent = title
    document.getElementById("popupSubtitle").textContent = subtitle
    document.getElementById("popupText").textContent = text
}

function popupClose() {
     document.getElementById("overlay").style.display = "none"
     document.getElementById("popup").style.display = "none"
}

function popupTextAlign(direction) {
    document.getElementById("popupTitle").style.textAlign = direction
    document.getElementById("popupSubtitle").style.textAlign = direction
    document.getElementById("popupText").style.textAlign = direction
}

function getChuckNorrisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            console.log("aaa" + data.value);
            document.getElementById("phraseAcceuil").textContent = data.value;
        })
        .catch(error => {
            console.error("Erreur :", error);
        });
}

document.addEventListener("keydown", function(event) {
    if (event.key == "Escape") {
        document.getElementById("overlay").style.display = "none"
        document.getElementById("popup").style.display = "none"
    }
})