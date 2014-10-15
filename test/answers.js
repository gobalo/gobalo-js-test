(function($, window, document, undefined) {
/*
 * INSTRUCCIONES:
 * 1. Al principio de cada caso de prueba se explica qué hay que hacer
 * 2. Solo se permite añadir código entre los comentarios "Edit from here" hasta "To here"
 * 3. 
 */



/*
 * Imagina que existe un "div" con la id "content", utilizando jQuery:
 * 1. Inserta dentro de este elemento un <div> con id "testDiv", con las medidas 100x50px de ancho y con el color de fondo "#cccccc"
 * 2. Dentro del nuevo "testDiv" inserta un <p> con cualquier texto
 * 3. Por último inserta un <span> con otro texto diferente ANTES del <p> anterior
 */
function testjQuery(){
	/*
	 * Edit from here
	 */
	
	/*
	 * To here
	 */
}



/*
 * Ahora haz el mismo ejercicio pero utilizando javascript nativo, nada de jQuery
 */
function testVanilaJS(){
	/*
	 * Edit from here
	 */
	
	/*
	 * To here
	 */
}




/*
 * Crea una función "add(n)" que devuelva una función que añada n a un número, ejemplos:
 * 1. add(1) === function
 * 2. add(2)(3) === 5
 * 3. add(5)(3) === 8
 */
function add(n){
	/*
	 * Edit from here
	 */
	
	/*
	 * To here
	 */
}




/*
 * Averigua por qué la miel no está incrementando en la colmena.
 * Para ello corrige las partes que sean necesarias, el código que se ejecutará es:
 * 	1. var theHive = new Hive();
 * 	2. var theBee = new Bee(theHive);
 * 	3. theBee.unloadHoney();
 * En este punto la miel total de la colmena debe ser igual a 111 (100 + 11)
 */
function Hive(){
	this.honey = 100;
}
Hive.prototype.addHoney = function(honey) {
  return this.honey += honey;
};
function Bee(hive){
	this.capacity = 11;
	this.hive = hive;
}
/*
 * Edit from here
 */
Bee.prototype.unloadHoney = function() {
	//hive.addHoney(this.capacity);
};
/*
 * To here
 */





/*
 * Crea una función "once(function)" que devuelva una función que solo pueda ser llamada una vez, ejemplos:
 * 1. var logOnce = once(console.log); 
 * 	  logOnce("foo") // -> "foo"
 *    logOnce("bar") // -> no effect
 * 
 * 2. var logOnce = once(alert); 
 * 	  logOnce("a") // -> "a"
 *    logOnce("b") // -> no effect
 */
function once(fn){
	/*
	 * Edit from here
	 */
	
	/*
	 * To here
	 */
}









window.testjQuery = testjQuery;
window.testVanilaJS = testVanilaJS;
window.Hive = Hive;
window.Bee = Bee;
window.add = add;
window.once = once;

})(jQuery, window, document);