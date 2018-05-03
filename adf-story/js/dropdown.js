function setCar() {
    var img = document.getElementById("oeuil");
    img.src = this.value;
    return false;
}
document.getElementById("dropdown").onchange = setCar;
