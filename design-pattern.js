
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