
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