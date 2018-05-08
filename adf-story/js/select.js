//http://jsfiddle.net/treyh/xf2pq/
function setTex() {
    var img = document.getElementById("tex");
    img.src = this.value;
    return false;
}
function showDivT() {
  document.getElementById("texture").style.visibility = "visible";
}
document.getElementById("dropTex").onchange = setTex;


//document.getElementById("dropOeuil").addEventListener("change", setOeuil);

  function setOeuil() {
      var img = document.getElementById("oeuil");
      img.src = this.value;
      return false;
  };
  function showDivO() {
    document.getElementById("dragOeuil").style.visibility = "visible";
  };
document.getElementById("dropOeuil").onchange = setOeuil;

function setOeuil2() {
    var img = document.getElementById("oeuil2");
    img.src = this.value;
    return false;
};
function showDivO2() {
  document.getElementById("dragOeuil2").style.visibility = "visible";
};
document.getElementById("dropOeuil2").onchange = setOeuil2;

//

function setNez() {
    var img = document.getElementById("nez");
    img.src = this.value;
    return false;
}
function showDivN() {
  document.getElementById("dragNez").style.visibility = "visible";
}
//document.getElementById("dropNez").onchange = showDivN;
document.getElementById("dropNez").onchange = setNez;

function setBou() {
    var img = document.getElementById("bou");
    img.src = this.value;
    return false;
}
function showDivB() {
  document.getElementById("dragBou").style.visibility = "visible";
}
document.getElementById("dropBou").onchange = setBou;

function setProt() {
    var img = document.getElementById("prot");
    img.src = this.value;
    return false;
}
function showDivP() {
  document.getElementById("dragProt").style.visibility = "visible";
}
document.getElementById("dropProt").onchange = setProt;

function setProt2() {
    var img = document.getElementById("prot2");
    img.src = this.value;
    return false;
}
function showDivP2() {
  document.getElementById("dragProt2").style.visibility = "visible";
}
document.getElementById("dropProt2").onchange = setProt2;
