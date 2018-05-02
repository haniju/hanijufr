function showvue() {
  var vueopt = document.getElementById("vue").selectedIndex;
  document.getElementById(vueopt).style.display = "block";
  document.getElementById("oeuil2").style.display = "none";
  document.getElementById("oeuil3").style.display = "none";
  document.getElementById("oeuil4").style.display = "none";
}

// Isoler l'option selectionnée
function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;

// transporter l'option selectionnée
var opt = getSelectedOption(sel);
// changer le style du gif de l'option selectionnée
document.getElementById(opt).style.display = "block";
}


function getSelectedOption(sel) {
    var opt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}
