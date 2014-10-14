(function($, window, document, undefined) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
 
 	QUnit.log(function( details ) {
		
	});
 	
 	module('reset content', {
 		setup : function(){
 			$('#content > *').remove();
 		},
 		teardown : function(){
 			$('#content > *').remove();
 		}
 	});
	
	
	test('jQuery', function(){
 		expect(6);
 		
 		window.testjQuery();
		
		var $futureDiv = $('#content > *');
		strictEqual($futureDiv.length, 1, 'Solo debe haber un div dentro de #content');
		
		strictEqual($futureDiv.first().css('background-color'), 'rgb(204, 204, 204)', 'El color de fondo no es correcto');
		
		var $firstInserted = $futureDiv.find('p'),
			$lastInserted = $futureDiv.find('span');
			
		strictEqual($futureDiv.find('p, span').length, 2, 'Dentro del div solo debe haber un parrafo y un span');
		
		notEqual($firstInserted, $lastInserted, 'El parrafo y el span son los mismos');
		
		notEqual($firstInserted.text(), $lastInserted.text(), 'El parrafo y el span deben tener textos diferentes');
		
		strictEqual($firstInserted.prev().text(), $lastInserted.text(), 'El span debe estar antes del parrafo');
	});
	
	test('vanillaJS', function(){
 		expect(6);
 		
 		window.testVanilaJS();
		
		var $futureDiv = $('#content > *');
		strictEqual($futureDiv.length, 1, 'Solo debe haber un div dentro de #content');
		
		strictEqual($futureDiv.first().css('background-color'), 'rgb(204, 204, 204)', 'El color de fondo no es correcto');
		
		var $firstInserted = $futureDiv.find('p'),
			$lastInserted = $futureDiv.find('span');
			
		strictEqual($futureDiv.find('p, span').length, 2, 'Dentro del div solo debe haber un parrafo y un span');
		
		notEqual($firstInserted, $lastInserted, 'El parrafo y el span son los mismos');
		
		notEqual($firstInserted.text(), $lastInserted.text(), 'El parrafo y el span deben tener textos diferentes');
		
		strictEqual($firstInserted.prev().text(), $lastInserted.text(), 'El span debe estar antes del parrafo');
	});
	
	
	test('JS objects & prototypal pattern', function() {
    	expect(3);
		
		var Hive = window.Hive;
		var Bee = window.Bee;
		
		var theHive = new Hive();
		var theBee = new Bee(theHive);
		
		strictEqual(theBee.capacity, 11, 'The bee does not have the expected capacity');
		strictEqual(theHive.honey, 100, 'Hive.honey does not have a valid value');
		
		theBee.unloadHoney();
		
		strictEqual(theHive.honey, 111, "hive.honey amount does not have a valid value");
	});
	
	
	test('function add', function() {
    	expect(3);
		
		var add = window.add;
		
		strictEqual(typeof add(1), 'function', 'add(1) debe devolver una funcion');
		strictEqual(typeof add(3)(4), 'number', 'add(3)(4) debe devolver un numero');
		strictEqual(add(1)(2), 3, 'add(1)(2) debe ser igual a 3');
	});
	
	
	
	test('function once', function() {
    	expect(5);
		
		var once = window.once;
		
		function logger(txt){
			return txt;
		}
		var logOnce = once(logger); 
		
		strictEqual(typeof once, 'function', 'once debe ser una funcion');
		strictEqual(typeof logOnce, 'function', 'once debe devolver una funcion');
		strictEqual(logOnce('test'), 'test', 'Primera ejecución: logOnce("test") debe ser igual a "test"');
		strictEqual(logOnce('test'), undefined, 'Segunda ejecución: logOnce("test") no debe hacer nada');
		strictEqual(logOnce('test'), undefined, 'Tercera ejecución: logOnce("test") sigue sin tener que hacer nada');
	});
	
}(jQuery, window, document));
