function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    /*element.style.visibility = 'visible';*/
    document.getElementById("dragon").style.visibility = 'visible';
    alert("pedi tu deseo guachin");
}



function mostrarFecha( ){
var d = new Date();
alert("estamos en el mes: "+d.getMonth());  
}

window.onload = function() {
  mostrarFecha( );
};