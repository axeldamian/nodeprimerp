window.onload = function() {
  ingresarArticulos( );
  if ( getUrlVars()["id"]== '1' ){
 	document.getElementById('infoarticulo').innerHTML ='<p>l gobierno venezolano calificó este viernes como un golpe de Estado contra el Mercosur la decisión de sus cuatro socios de suspenderla del bloque, por incumplir normas democráticas y comerciales.Es un golpe de Estado al Mercosur y constituiría una agresión a Venezuela de dimensiones realmente muy graves, dijo la canciller Delcy Rodríguez en rueda de prensa, y sostuvo que su país aún no ha sido notificado de la medida, según reportó AFP."Se pretende hacer un golpe de Estado, de ejecutar esto estarían haciendo del Mercosur ilegal, nosotros nos mantenemos a la legalidad del sistema por lo tanto Venezuela no ha sido notificada, de darse esto estaríamos a una situación de hecho", señaló en declaraciones recogidas por Telesur.</p>';
 	}

 	if ( getUrlVars()["id"]== '2' ){
 	document.getElementById('infoarticulo').innerHTML ='<p> El pedido del secretario General de la Organización de Estados Americanos (OEA) Luis Almagro para la "inmediata liberación" Milagro Sala generó múltiples réplicas en el Gobierno de Cambiemos. No solo la Canciller, Susana Malcorra, salió a cruzarlo, sino también el interbloque de senadores del oficialismo y la Unión Cívica Radical lo cuestionaron. A todas esas críticas, se sumó hoy una lapidaria carta abierta de la diputada nacional Alejandra Martínez, una de las detractoras públicas más mediáticas de la líder de la Tupac, dirigida al diplomático.  "Milagro Sala no es una abanderada de los desposeídos", lanzó y agregó: "Los vulnerables no fueron protegidos por Sala: fueron sus rehenes". En un extenso texto, la legisladora radical apuntó a los argumentos de Almagro para solicitar que la militante K recupere la libertad y desmenuzó todas las causas por las que sigue presa en el penal de Alto Comedero.  </p>';
 	}

 	if ( getUrlVars()["id"]== '3' ){
 	document.getElementById('infoarticulo').innerHTML ='<p>hola 3</p>';
 	}

}

function ingresarArticulos( ){
var a1 = new Articulo( "Venezuela tilda de 'golpe de Estado' su suspensión del Mercosur" , "Argentina, Brasil, Uruguay y Paraguay le cesaron sus derechos como miembro pleno del bloque.",1,true );
var a2 = new Articulo( "alal" , "ololololslaoaou",2,false );
var a3 = new Articulo( "Lapidaria carta al jefe de la OEA: Milagro Sala no fue abanderada de desposeídos, fueron sus rehenes" , "Sospechas de corrupción Alejandra Martínez le dirigió una misiva al secretario General de la Organización de Estados Americanos, Luis Almagro." ,3,true);
var b1 = new Articulo( "noticia4" , "arrondo, edad 24",4,true );
var b2 = new Articulo( "notivcia 5" , "sdkdsadas bla bl a bla",5,false );
var b3 = new Articulo( "notcia 6" , "desnublado" ,6,true);
var mda = new manejadorDeArticulos();
var mda2 = new manejadorDeArticulos();
mda.load( a1 , a2 , a3 );
mda2.load( b1, b2 , b3 );
document.getElementById('content').innerHTML = mda.render();
document.getElementById('content').innerHTML += mda2.render();

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
	return '<div class="articulo2">'+this.articulo1.render()+'</div>'+'<div class="articulo">'+this.articulo2.render()+'</div>'+'<div class="articulo">'+this.articulo3.render()+'</div>';
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





