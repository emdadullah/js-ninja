
/* 1. IIFE  pattern*/

(function($){
	
})(jQuery)



/* 2. Module pattern */

var M = M || {};

M = (function(){
		
	var publicFunc = function function_name (argument) {
		// body...
	};

	return publicFunc;
})();



/* 3. Chainning pattern */

$('body').css()
		 .find('.main')
		 .text("This is main block");



/* 4. Prototype pattern */

var Calculator = function (eq) {
    //state goes here    
    this.eqCtl = document.getElementById(eq);
};

Calculator.prototype = {
    add: function (x, y) {
        this.eqCtl.innerHTML = x + y;
    },
    subtract: function (x, y) {
        this.eqCtl.innerHTML = x - y;
    }
};

var calc = new Calculator();
alert(calc.add(1, 1));
