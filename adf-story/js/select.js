//http://jsfiddle.net/treyh/xf2pq/
function setTex() {
    var img = document.getElementById("tex");
    img.src = this.value;
    return false;
}
document.getElementById("dropTex").onchange = setTex;


function setOeuil() {
    var img = document.getElementById("oeuil");
    img.src = this.value;
    return false;
}
document.getElementById("dropOeuil").onchange = setOeuil;

function setNez() {
    var img = document.getElementById("nez");
    img.src = this.value;
    return false;
}
document.getElementById("dropNez").onchange = setNez;

function setBou() {
    var img = document.getElementById("bou");
    img.src = this.value;
    return false;
}
document.getElementById("dropBou").onchange = setBou;

function setProt() {
    var img = document.getElementById("prot");
    img.src = this.value;
    return false;
}
document.getElementById("dropProt").onchange = setProt;
