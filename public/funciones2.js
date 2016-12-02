window.onload = function() {
  ingresarArticulos( );

  if ( getUrlVars()["id"]== '1' ){
 	document.getElementById('infoarticulo').innerHTML ='<p>hola 1</p>';
 	}

 	if ( getUrlVars()["id"]== '2' ){
 	document.getElementById('infoarticulo').innerHTML ='<p>hola 2</p>';
 	}

 	if ( getUrlVars()["id"]== '3' ){
 	document.getElementById('infoarticulo').innerHTML ='<p>hola 3</p>';
 	}

}

function ingresarArticulos( ){
var a1 = new Articulo( "axel" , "arrondo, edad 24",1,true );
var a2 = new Articulo( "alal" , "el perro come dogui",2,false );
var a3 = new Articulo( "nube" , "desnublado" ,3,true);
var mda = new manejadorDeArticulos();
mda.load( a1 , a2 , a3 );
document.getElementById('articuloslistado').innerHTML = mda.render();
}

function cancelarDefault( event,id ){
 	event.preventDefault();
 	document.getElementById('infoarticulo').innerHTML ='<p>'+id+'</p>';
 }

/* clase manejador de articulos */
var manejadorDeArticulos = function(){
this.articulo1 = null;
this.articulo2 = null;
this.articulo3 = null;
}

manejadorDeArticulos.prototype.load = function(articulo1,articulo2,articulo3){
	this.articulo1 = articulo1;
	this.articulo2 = articulo2;
	this.articulo3 = articulo3;
}

/* mostrar 3 articulos */
manejadorDeArticulos.prototype.render = function(){
	return '<div class="articulo">'+this.articulo1.render()+'</div>'+'<div class="articulo">'+this.articulo2.render()+'</div>'+'<div class="articulo">'+this.articulo3.render()+'</div>';
}

/* clase articulos */
var Articulo = function ( titulo , contenido ,id, boolSame ){
	this.titulo = titulo;
	this.contenido = contenido;
	this.id = id;
	this.samePage = boolSame;
}


/* mostrar articulo */
Articulo.prototype.render = function (){
	if( this.samePage ){
	return '<article><h3>'+this.titulo+'</h3><p>'+this.contenido+'</p>'+'<a  onclick="cancelarDefault(event,'+this.id+')" href="enlace2.html?id='+this.id+'">link</a>'+'</article>';
    }else{
    	  return '<article><h3>'+this.titulo+'</h3><p>'+this.contenido+'</p>'+'<a href="enlace2.html?id='+this.id+'">link</a>'+'</article>';
    }
}


function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*  USO DE GETURLVARS
var first = getUrlVars()["id"];
var second = getUrlVars()["page"];
*/


