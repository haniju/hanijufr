function showopt() {
  var selectopt = document.getElementById("dropdown").selectedIndex;

  // changer le style du gif de l'option selectionnée
  document.getElementById(selectopt).style.visibility = "visible";
  document.getElementById("opt").style.visibility = "hidden";
}

// Isoler l'option selectionnée
function getSelectedOption(sel) {
    var selectopt;
    for ( var i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return selectopt;
}
// transporter l'option selectionnée
var opt = getSelectedOption(sel);
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
