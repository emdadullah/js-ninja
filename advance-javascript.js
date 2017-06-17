/*
    Jquery new method what I have learned recently
*/
$.camelCase('emdad-ullah')


/*
    Console  
*/

console.log("Test console log");
console.debug("Test console debug");
console.warn("Test console warn"); 
console.info("Test console info");
console.error("Test console error");

console.dir(jQuery.prototype);
console.dir(jQuery.fn);

/* Console Table exp with group key*/
http:/xampp.aareas.com/readynj
console.table(gModelData);

console.groupCollapsed('List of model after sort');
console.table(modelList, ['Id','distance_from_user','Map_Point','ModelName','ModelDescription','SalesCenterName','City','County','Address','LotNo_UnitNo']);
console.groupEnd();

/// function name can be any thing exp. console.test
console.todo = function( msg){
    console.log( '%c %s %s %s ', 'color: yellow; background-color: black;', ' — ', msg, ' — ');
}
console.todo("This is something that's need to be fixed");

console.important = function( msg){
    console.log( '%c%s %s %s', 'color: brown; font-weight: bold; text-decoration: underline;', ' — ', msg, ' — ');
}
console.important('This is an important message');


/*
    Few other tips
*/

var urls = $$('a'); 
var allUrl = ''; 
for (url in urls)  
  allUrl += urls[url].href + '\n';

$('body').hide()
debug(jQuery.prototype.hide)

monitorEvents($0, "mouse");
unmonitorEvents($0, "mousemove");
getEventListeners($0);

/*
var _val = someObject.prop;
Object.defineProperty(someObject, 'prop', {
  get: function() { return _val; },
  set: function(val) {
    if(val !== 'expected value') {
      try {
        throw new Error('Why you do that?');
      } catch(err) {
        console.log(err.stack);
      }
    }

    _val = val;
  }
});

var fn = someObject.fn;
someObject.fn = function(){
  // Why is this getting called?
  debugger;
  return fn.apply(this, arguments);
};
*/
var myObj = {
    a : 10,
    b : 20,
    func : function (x,y) {
        return this.a * x + this.b * y;
    }
};

var _val = myObj.a;
Object.defineProperty(myObj, 'a', {
    get: function() { return _val; },
    set: function(val) {
        if(val !== 'expected value') {
            try {
                // myObj.a = _val;  this create a loop
                throw new Error('Why you do that?');
            } catch(err) {
                console.log(err.stack);
            }
        }
        _val = val;

    }
});

var fn = myObj.func;
myObj.func = function(){
    // Why is this getting called?
    debugger;
    return fn.apply(this, arguments);
};

function xyz(x,y,z){
    return myObj.func(x,y);
}

function abc(a,b,c){
    return xyz(b,c);
}


var source = $$('pre')[0].innerHTML;
>>> source
>>> source = eval(source)
[Object, Object...]
>>> source.length



https://developer.chrome.com/devtools/docs/commandline-api
https://developer.chrome.com/devtools/docs/tips-and-tricks
https://matthewphillips.info/posts/js-debugging 


// Ctrl + Shft + P                     Open command palette
// Ctrl + Shft + /                     Toggle comments on selected lines
// Ctrl + Shft + Entr                  Insert line before
// Ctrl + Shft + Up                    Move line up
// Ctrl + P                            Go to anything
// Ctrl + G                            Go to line number
// Ctrl + R                            Go to function
// Ctrl + ;                            Go to word
// Ctrl + Tab                          Switch to the next tab
// Ctrl + Shft + Tab                   Switch to the previous tab
// Ctrl + N                            Open new tab
// Ctrl + Shft + N                     Open new window
// Ctrl + Alt + P                      Switch to recent project
// Alt  + Shft + 1                     Switch to 1 column and 1 row layout
// Alt  + Shft + 2                     Switch to 2 column layout



/* 
tild sign   0, -1 
*/

var ttt;
~ttt
~~ttt;

// 1 . ivestigate : cannonical solution


/*
   Clouser Exp.
*/

(function(){
   var v1 = 5;

   function a(){
      console.log(v1);
   }

   v1 = 10;

   b(a);

   function b(a){
      a();
   }

})();

/*
   Output : 10
*/


/*
   clouser 6,6,6,6,6,6
*/


for(var i=0; i <= 5; i++ ){
   setTimeout(function(){
      console.log("i : " + i);
   },i * 1000);
}


/*
   clouser solution 0,1,2,3,4,5
*/


for(var i=0; i <= 5; i++ ){
   (function(i){
	   setTimeout(function(){
	      console.log("i : " + i);
	   },i * 1000);
   })(i);
}


/*
   With key word
*/

(function(){

var obj = {
   a : 5,
   b : 7,
   c : 12 
} 

//obj.c = obj.a + obj.b;
//obj.a = obj.c + obj.a;

with(obj){
   c = a + b;
   a = c + b;
   d = a - b;
}

console.dir(obj);

// Problem of with 

obj.d;               // undefined
d;                   // 12

})();



/*
   Eval is evil (Try to not use it, make code slower)
*/

(function(){

var bar = "abc";
function a(str){
   eval(str)
   console.log(bar);
}

a("var bar = 42;");

})();

/*
    IIFE ( Imediately invoked function expresssion )
*/
var a= 10000000000;

(function(){
      var a = 10;         // So we are save from global variable
      console.log(a);  
})();

// Global variable 
console.log(a);  // 10000000000 

/*
    Hoisting exp. for varable
*/

(function(){
    a;
    b;

    console.log(a);     // ??  (not undecleared but undefined)
    console.log(b);     // ??  (not undecleared but undefined)
    var a;
    var b;

    a = 2;              
    b;                  
    console.log(a);     //  2  
    console.log(b);     // ??
})();

/*
    Hoisting exp. for function
*/

(function(){
    a();    // Any one can call me
    b();    // OOPS Error

    /********Function declearation*****************/
    function a(){
      console.log("Any one can call me");
    }

    /********Function Expression*****************/
    var b = function(){
      console.log("Everyone should not can call me");
    }

})();

/*
    Function hoisted 1st
*/

(function(){   
   foo();
   var foo = 2;   
   function foo(){
      console.log("1");
   }
   function foo(){
      console.log("2");
   }
   console.dir(foo);
})();

/*
  This key word

*/
    console.log(this);            // global window object

    function doSomething(e){
      e.preventDefault();
      console.log(this);          // global window object
    }
    doSomething();

    (function(){
      console.log(this);          // global window object
    })();


    <a href="http://buyhallmarkhomes.com">emdad</a>


    $('a').on('click', function(e){
        doSomething(e);
    });

/*
  This key with an event
*/
<a href="http://buyhallmarkhomes.com">emdad</a>

$('a').on('click', function(){
    console.log(this);        // Output : <a href="http://buyhallmarkhomes.com">emdad</a>
});

        
function doThis(e){
    e.preventDefault();
    console.log(this);
}

$('a').on('click', doThis);    // Output : <a href="http://buyhallmarkhomes.com">emdad</a>


var obj = {
    doIt : function(e){
        e.preventDefault();
        console.log(this);
    }
  }

$('a').on('click', obj.doIt);   // Output : <a href="http://buyhallmarkhomes.com">emdad</a>

  
/*    
    This key word explicite bind anchor
*/


$('a').on('click', function(e){
  console.log(this);            
  doSomething.apply( this , [e]);
  obj.doIt.call(this,e);

  //For All Output : <a href="http://buyhallmarkhomes.com">emdad</a>
});



/*
    this keyword  Default , Implecite binding
*/

var bar1 = 'I am from global';

function foo1(){
    console.log(this.bar1);
}

var o2 = { bar1 : 'I am from o2', foo1 : foo1};
var o3 = { bar1 : 'I am from o3', foo1 : foo1};

foo1();              // I am from global && defalut binding
o2.foo1();           // I am from o2 && implecite binding
o3.foo1();           // I am from o3 && implecite binding


/*
    this key word  Default , Explicite binding
*/

var bar2 = 'I am from global';

function foo2(){
    console.log(this.bar2);
}

var obj2 = { bar2 : 'I am from obj2'};

foo2();                 // I am from global   && defalut binding
foo2.call(obj2);        // I am from obj && Explicite binding


/*
    this key word hard binding
*/

function foo3(){
    console.log(this.bar3);
}

var obj3 = { bar3 : 'I am from obj3'};
var obj4 = foo3;
var obj5 = { bar3 : 'I am from obj5'};
foo3 = function(){ obj4.call(obj3); }

foo3();                 // I am from obj3 && hard binding
foo3.call(obj5);        // I am from obj3 not obj5  && hard binding

/*
    this keyword hard binding
*/

function bind(fn,o){
    return function(){ 
      fn.call(o); 
    }; 
}

function foo7(){
    console.log(this.bar7);
}

var obj7 = { bar7 : 'I am from obj7'};
var obj8 = { bar7 : 'I am from obj8'};

foo7 = bind(foo7,obj7);

foo7();                 // I am from obj7 && hard binding
foo7.call(obj8);        // I am from obj7 not obj8  && hard binding

/*
    this key word hard binding (now you can pass parameter)
*/


if (!Function.prototype.bind2) {
    Function.prototype.bind2 = function(o){
        fn = this;
        return function(){          
          fn.apply(o, arguments);
        }
    }
}

function foo9(abc9){
    console.log(this.bar9  + ", fn param " + abc9);
}

var obj9 = { bar9 : 'I am from obj7'};
var abc9 = 'bar'; 

foo9 = foo9.bind2(obj9);

foo9(abc9);                 // I am from obj9, fn param bar && hard binding


/*
   Singleton Design Pattern
*/

(function(){

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}

run();

})();



/*
  Chainning design pattern
*/

var cal = function(start){

  // Make object without new keyword
  if(!(this instanceof cal))
  {
     return new cal(start || 0);  // if start is undedfined then set it 0
  }

  this.add = function(x){
    start = start + x;
    return this; 
  };

  this.multiply = function(x){
    start = start * x;
    return this; 
  };

  this.equals = function(callback){
     callback(start);
     return this;
  };  
}


new cal(0)
    .add(5)
    .add(6)
    .multiply(100)
    .equals(function(r){console.log(r)});

cal()
    .add(5)
    .add(6)
    .multiply(100)
    .equals(function(r){console.log(r)});



/*
   When new keyword infront of a function,
   then 4 things heppen
      1. A brand new object is created
      2. Brand new object get link to a deffent object
      3. brand new Object get bound as the 'this' key word for the purpose of our function call
      4. If this function does not return any thing it will implecitely return this. 
*/



/*
   Have to remove new 
*/
var cal = function(start){
  return init.call(this,start)  
}

var init = function(){
  this.add = function(x){
    start = start + x;
    return this; 
  };

  this.multiply = function(x){
    start = start * x;
    return this; 
  };

  this.equals = function(callback){
     callback(start);
     return this;
  };  
}

var chainngTest = {
    
    a : 0,
    b : 0,
    setA : function(a){
       this.a = a;
       return this;
    },
    setB : function(b){
       this.b = b;
       return this;
    }, 
    add : function(a,b){
       this.a = ( typeof a == "undefined" ) ? this.a : a;
       this.b = ( typeof b == "undefined" ) ? this.b : b;
       return this.a + this.b;
    },
    sub : function(a,b){
       this.a = ( typeof a == "undefined" ) ? this.a : a;
       this.b = ( typeof b == "undefined" ) ? this.b : b;
       return this.a - this.b;
    },
    mul : function(a,b){
       this.a = ( typeof a == "undefined" ) ? this.a : a;
       this.b = ( typeof b == "undefined" ) ? this.b : b;
       return this.a * this.b;
    },
    div : function(a,b){
       this.a = ( typeof a == "undefined" ) ? this.a : a;
       this.b = ( typeof b == "undefined" ) ? this.b : b;
       return this.a * this.b;
    }
}

function jQuery(dom){
    var ele = document.getElementsByTagName(dom)[0];
    function bg-color(color){
        ele.style.backgroundColor = color
    }
}

/*
    Call, Apply And Bind
*/

Good mnemonic -> Apply uses Arrays and Always takes A maximum of two Arguments. 
                 When you use Call you have to Count the number of arguments.

Use .bind() when you want that function to later be called with a certain context, useful in events. Use .
call() or .apply() when you want to invoke the funciton immediately, and modify the context.

Exp - 1

function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function(e) {
     var t=this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};

Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {
        fn.apply(ctx, arguments);
    };
};

Exp - 2

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");

// My name is John and I am a fireman.
// My name is Susan and I am a school teacher.
// My name is Claude and I am a mathematician.

Exp - 3 

f.call(thisObject, a, b, c); // Fixed number of arguments

f.apply(thisObject, arguments); // Forward this function's arguments

var args = [];
while (...) {
    args.push(some_value());
}
f.apply(thisObject, args); // Unknown number of arguments


/*
    Two set of parentheses after function call
*/

Exp - 1

function add(x){
  return function(y){
    return x + y;
  };
}

var addTwo = add(2);

addTwo(4) === 6; // true
add(3)(4) === 7; // true


Exp - 2

function add(a,b) {
  if (arguments.length === 1) {
    return function(b2) { // You could call this arg `b` as well if you like,
      return a + b2;      // it would shadow (hide, supercede) the one above
    };
  }
  return a + b;
}
snippet.log(add(10, 10)); // 20
snippet.log(add(10)(10)); // 20


/*
    Jquery extend
*/

// Exp -> 1

var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
 
// Merge object2 into object1
$.extend( object1, object2 );
 
console.log( JSON.stringify( object1 ) );
/// Output : {"apple":0,"banana":{"price":200},"cherry":97,"durian":100}


// Exp -> 2

var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};
 
// Merge object2 into object1, recursively
$.extend( true, object1, object2 );
 
console.log( JSON.stringify( object1 ) );
/// Output : {"apple":0,"banana":{"weight":52,"price":200},"cherry":97,"durian":100}

// Exp -> 3

var defaults = { validate: false, limit: 5, name: "foo" };
var options = { validate: true, name: "bar" };
 
// Merge defaults and options, without modifying defaults
var settings = $.extend( {}, defaults, options );
 
// Assuming JSON.stringify - not available in IE<8
console.log( "<b>defaults -- </b>" + JSON.stringify( defaults ) );
console.log( "<b>options -- </b>" + JSON.stringify( options ) );
console.log( "<b>settings -- </b>" + JSON.stringify( settings ) );

/*
   Singleton Design Pattern
*/

// Def
//    Ensure a class has only one instance and provide a global point of access to it.

(function(){

var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
 
    alert("Same instance? " + (instance1 === instance2));  
}

run();

})();


/*
    Classic module pattern 
*/

var foo = (function(){
   
   var obj = { o : 'abc'}

   return {
      bar : function(){
         console.log(obj.o);
      }
   };
})();

foo.bar();



/*
    Modified module pattern 
*/
var foo = (function($){
   var privateObj = { 
                        o : "I am private varialbe",
                        t : function(){
                           return "I am private function";
                        }  
                     }

   var publicAPI = {
         bar  : function(){
            publicAPI.buz();
         },
         buz : function(){
            console.log(privateObj.t())
         }
      }

   return publicAPI;
})( jQuery );   // wp does not support support $, So Do this

foo.bar();

/*
    Module pattern, here A is a decliaration
*/
var foo = (function(){
   
 function A(){
    console.log("A");
 }
 
 console.log("B");
 return A;

})()();

// Output B A

/*
    Facade Pattern
*/

// Def->
//      Provide a unified interface to a set of interfaces in a subsystem. 
//      Façade defines a higher-level interface that makes the subsystem easier to use.

var Mortgage = function(name) {
    this.name = name;
}
 
Mortgage.prototype = {
 
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
 
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
 
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
 
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
 
function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");
 
    alert(result);
}

run();


/*
    Observer Pattern
*/

// Def
//  1. Define a one-to-many dependency between objects so that when one object changes state, 
//  all its dependents are notified and updated automatically.

//  2. A way of notifying change to a number of classes to 
//  ensure consistency between the classes.



function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    fire: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
 
    var clickHandler = function(item) { 
        log.add("fired: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');
    click.unsubscribe(clickHandler);
    click.fire('event #2');
    click.subscribe(clickHandler);
    click.fire('event #3');
 
    log.show();
}
run();

/*
    Extend core jquery functionality
*/

/// 1st exp

$['alert'] = function(msg){ alert(msg); };

$.alert("My custom alert method");   


$.var_dump = function(obj){ console.dir(obj); };

$.var_dump(myobj);


/// 2nd exp

(function($){
    $['filterObj'] = function( elem, callback){
        var retObj = [];

        for (var i = elem.length - 1; i >= 0; i--) {
            if( callback( elem[i], i ) ){
               retObj.push(elem[i]);
            }   
        }

        return retObj;
    };
})( jQuery );


//// For testing above code (2nd)

var myobj =  [            
      {firstname : 'Emdadullah', lastname : 'kazi'},
      {firstname : 'Abdullah', lastname : 'shovo'}
];



var o = $.filterObj(myobj, function(obj,index){
       return obj.lastname == 'kazi';
});



////  3rd exp with testing data

var myobj1 =  [            
      {firstname : 'Emdadullah', lastname : 'kazi'},
      {firstname : 'Abdullah', lastname : 'shovo'}
];

var myobj2 = {
        a : 10,
        b : 20,
        c : function(x,y){
            return x + y;
        }
};

var myfunc1 = function cal(x,y){
      this.add = function(x,y) {
          return x + y;
      }
};

var myarr = [1,2,3,4,5];


var mystring = 'Emdad Ullah';
var myint = 1000000;

var mydom1 = $('body');
var mydom2 = $('.slider');
var mydom3 = $('style');
var mydom4 = $('style');
var mydom5 = $('html');



function consolewin(msg){
    console.log(msg)
}

function isArrayLike( obj ) {

  // Support: iOS 8.2 (not reproducible in simulator)
  // `in` check used to prevent JIT error (gh-2145)
  // hasOwn isn't used here due to false negatives
  // regarding Nodelist length in IE
  var length = !!obj && "length" in obj && obj.length,
    type = jQuery.type( obj );

  if ( type === "function" || jQuery.isWindow( obj ) ) {
    return false;
  }

  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


$.var_dump = function( data , optType){  

    var showData = optType === 'alert' ? alert : consolewin;
    var retData;

    // if( $.isPlainObject( data ) || $.isArray(data) ){
      
    if( $.isArray(data) || $.isPlainObject( data ) ){
        console.log("1");
        retData = JSON.stringify(data);
    }else if( $.isFunction(data) || $.isNumeric(data) || typeof data === 'string' ){
        console.log("2");
        retData = data;
    }else{
        console.log("3");
        retData = console.dir(data);
    }
    
    //showData(retData);
};
$.var_dump(myobj1);

/// myobj1, myobj2 is failed



/******************************************************/

/******************************************************/

/******************************************************/


$.var_dump = function( data , optType){  

    if(typeof data === "object" ){
        var k = Object.keys(data);
    }

    if( $.isArray(data)  && data.length > 1 &&  typeof data[k[0]] === "object" ){
        console.log("1");
        console.table(data);       /// myobj1
    }else if( typeof data === "object" && "context" in data){
        console.log("2");
        return data;     /// mydom1
    }else if( $.isFunction(data) || $.isNumeric(data) || typeof data === 'string' ){
        console.log("3");
        console.log(data);   // 
    }else if( $.isArray(data) || $.isPlainObject( data ) ){
        console.log("4");
        return data;
    }else{
        console.log("5");
        console.dir(data);
    }
    
    //showData(retData);
};
$.var_dump(myobj1);

/// later we will marge 2 & 4, We have to consider image and xml type also


/*
  fun with IIFE
*/

var abc = [ 
      function(){ x = { a : 12 }; return x;}(),
      function(){ p = { 
                b : function(){ alert('testing'); }
              }; 
              return p; }()
       ]

abc[1].b();



var abc =  {
      s : function(){ x = { a : 12 }; return x;}(),
      t : function(){ p = { 
                b : function(){ alert('testing'); }
              }; 
              return p; }()
       };

abc.t.b()


var abc = [ 
      function(){ x = 1+2+3+4; return x;}(),
      function(){ x = 1*2*3*4; return x;}(),
      function(){ x = 1/2/3/4; return x;}(),
      function(){ x = 1-2-3-4; return x;}(),
       ]


// Module pattern

var M = (function(){

          var privateApi = {
                pro : 'I am a private variable',
                fun : function(){
                  return 'I am private function'
                }

          };

          var publicApi = {
                pro : 'I am a public variable',
                fun : function(){
                  return 'I am public function'
                }

          };

          return publicApi;
})();


var UTIL = (function (parent, $) {
  var my = parent.ajax = parent.ajax || {};

  my.get = function (url, params, callback) {
    console.log('ok, so Im cheating a bit :');
    return $.getJSON(url, params, callback);
  };

  // etc...

  return parent;
}(UTIL || {}, jQuery));

UTIL.ajax.get();


function bindFn(fn,a){
    return function(b) {
      return fn(a,b);
    };
}

function add (a,b){ 
    return a + b;
}

var makeCaller = bindFn(add, 5);
makeCaller(100);


/// partial function

myFunc(1,2,3,4,5)
function myFunc(){
     slice = Array.prototype.slice;
     // console.log(slice.call(arguments,0));
     args = slice.call(arguments,1);
     console.log( args.concat(slice.call(arguments,0)) );
}


// IIFE

var C = (function(){

var A = function(){
   alert("A is called");
}

return A;

})();


var C = (function(){

var A = function(){
   alert("A is called");
}

return A;

})()();


var C = (function(){

var A = function(){
   alert("A is called");

   return function B () {
      alert("B is called");
   }
}

return A;

})()();


// clouser

A closure is an inner function that has access to the outer (enclosing) 
function’s variables—scope chain.

Closures’ Rules and Side Effects

1. Closures have access to the outer function’s variable even after the outer function returns:

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
​
​var mjName = celebrityName ("Md");
mjName("EU");

2. Closures store references to the outer function’s variables; they do not store the actual value. 


function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
​
}
​
​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
mjID.getID(); // 999​
mjID.setID(567); // Changes the outer function's variable​
mjID.getID(); // 567: It returns the updated celebrityId variable 

3. Closures Gone Awry

// This example is explained in detail below (just after this code box).​
​function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}
​
​var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
​
​var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
​
​var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103

closure (the anonymous function in this example) has access to the outer 
function’s variables by reference, not by value. So just as the previous 
example showed that we can access the updated variable with the closure, 
this example similarly accessed the i variable when it was changed, since the outer 
function runs the entire for loop and returns the last value of i, which is 103


// new keyword

>>> function F() { return function inner() { return "inner invoked"; }; }
>>> F()
inner()
>>> F()()
"inner invoked"
>>> new F
inner()
>>> new F()
inner()
>>> (new F)
inner()
>>> (new F)()
"inner invoked"
>>> new (F())
{ }
>>> new ((F)())
{ }
>>> (new F())()
"inner invoked"


/// clouser && lamda from php

var arr = [1,2,3,4];

var maxFinder =  function(max){  
  return function(v){ return v > max; } 
};

$.grep(arr, maxFinder(2) );

// clouser nice exp.

Function.prototype.cached = function() {
    var self = this, //"this" refers to the original function
        cache = {}; //our local, lexically scoped cache storage
    return function(args) {
        if(args in cache) return cache[args];
        return cache[args] = self(args);
    };
};

Math.sin = Math.sin.cached(); // this refer sin func, implicite binding
Math.sin(1) // => 0.8414709848078965
Math.sin(1) // => 0.8414709848078965 this time pulled from cache


/*
  bind
*/

// Exp 1

var user = {
    data : [ { name : 'emdadullah', age : 30} , {name : 'kifayet', age : 20}],
    ShowInfo : function(e){
       console.log( user.data[0].name );
    }
};


$('body').on('click', user.ShowInfo.bind(user) );

$('body').on('click', $.proxy( user.ShowInfo , user) );


/// Exp - 2

function greet (gender, age, name) {
    // if a male, use Mr., else use Ms.​
    var salutation = gender === "male" ? "Mr. " : "Ms. ";
​
    if (age > 25) {
        return "Hello, " + salutation + name + ".";
    }
    else {
        return "Hey, " + name + ".";
    }
}

// So we are passing null because we are not using the "this" keyword in our greet function.​
var greetAnAdultMale = greet.bind (null, "male", 45);
​
greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."​
​
var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."​
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​

function toggleClass( element , className ) {  
    var $elem = $(element),
        selected =  className || "selected";  

    if ( $elem.hasClass(selected) ) {   
        $elem.removeClass(selected); 
    } else {    
        $elem.addClass(selected);  
    } 
}


;(function ( $, window, document, undefined ) {    

    /*Options are received by the plugin*/    
    $.fn.bigger = function ( options ) {        
        /* Merge the passed in options with the default options */        
        options = $.extend( {}, 
        $.fn.bigger.options, options );        
            return this.each(function () {            
              var elem = $(this);            
              /*The options is used within the code to determine the font-size*/            
              elem.css({ "font-size" : options.fontSize });        
        });    
    };    

    /* Default options specified by the developer*/    
    $.fn.bigger.options = {        
        fontSize: "50px"    
    }; 

})( jQuery, window, document );




// Pure js

// forEach
function print(value) { console.log(value); }
function square(num) {  print(num, num * num); }
var nums = [1,2,3,4,5,6,7,8,9,10]; nums.forEach(square); 

// every
function isEven(num) {   return num % 2 == 0; }
var nums = [2,4,6,8,10]; var even = nums.every(isEven); if (even) {   print("all numbers are even"); } else {   print("not all numbers are even"); }

// some
function isEven(num) {   return num % 2 == 0; }
var nums = [1,2,3,4,5,6,7,8,9,10]; var someEven = nums.some(isEven); if (someEven) {   print("some numbers are even"); } else {   print("no numbers are even"); } 

// reduce
function add(runningTotal, currentValue) {   return runningTotal + currentValue; }
var nums = [1,2,3,4,5,6,7,8,9,10]; var sum = nums.reduce(add); print(sum); 

function concat(accumulatedString, item) {   return accumulatedString + item; }
var words = ["the ", "quick ","brown ", "fox "]; var sentence = words.reduce(concat); print(sentence); 

// map
function curve(grade) {   return grade += 5; }
var grades = [77, 65, 81, 92, 83]; var newgrades = grades.map(curve); print(newgrades);

function first(word) {   return word[0]; }
var words = ["for","your","information"]; var acronym = words.map(first); print(acronym.join("")); 

// indexof
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"]; 
names.indexOf("Raymond"); // 2

// concat (does not change original var but return concat value)
names.concat("Warner");
// ["David", "Cynthia", "Raymond", "Clayton", "Jennifer","Warner"];

var dmpDept = ["Raymond", "Cynthia", "Bryan"]; 
var itDiv = names.concat(dmpDept); print(itDiv);
// ["David", "Cynthia", "Raymond", "Clayton", "Jennifer","Warner","Raymond", "Cynthia", "Bryan"];

itDiv = dmpDept.concat(names); print(itDiv);
// ["Raymond", "Cynthia", "Bryan", "David", "Cynthia", "Raymond", "Clayton", "Jennifer","Warner"]


// join
names.join() // "David,Cynthia,Raymond,Emdadullah,Clayton,Jennifer,Warner"



// splice (change original value)
var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]; 
var dmpDept = itDiv.splice(3,3);  print(dmpDept); // Raymond,Cynthia,Danny 
print(itDiv); // Mike,Clayton,Terrill,Jennifer 

// push
var nums = [1,2,3,4,5]; print(nums); // 1,2,3,4,5 
nums.push(6); // ret array size
print(nums); // 1,2,3,4,5,6 

// unshift ( adding array elements to the beginning of an array is unshift() )
var nums = [2,3,4,5]; 
var newnum = 1; nums.unshift(newnum); // ret array size
print(nums); // 1,2,3,4,5 
nums = [3,4,5]; nums.unshift(newnum,1,2); print(nums); // 1,2,3,4,5 

// pop
var nums = [1,2,3,4,5,9]; nums.pop(); //  ret last element
print(nums); // 1,2,3,4,5 

// shift ( remove an element from the beginning of an array is shift() )
var nums = [9,1,2,3,4,5]; nums.shift(); //  ret 1st element
print(nums); // 1,2,3,4,5 


/// splice for insert element in a fixed position 
var nums = [1,2,3,7,8,9]; 
var newElements = [4,5,6]; 
nums.splice(3,0,newElements); 
print(nums); // 1,2,3,4,5,6,7,8,9 

// same result ( like above )
var nums = [1,2,3,7,8,9]; nums.splice(3,0,4,5,6); 


/// splice for remove elements from array 
var nums = [1,2,3,100,200,300,400,4,5]; 
nums.splice(3,4); 
print(nums); // 1,2,3,4,5 

/// sort
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"]; 
nums.sort(); 
print(nums); 
// Bryan,Clayton,Cynthia,David,Mike,Raymond 

var nums = [3,1,2,100,4,200]; nums.sort(); 

function compare(num1, num2) {   return num1 - num2; }
var nums = [3,1,2,100,4,200]; nums.sort(compare); 
print(nums); // 1,2,3,4,100,200 


/// sub string match in array of srting
function afterc(str) {   if (str.indexOf("cie") > -1) {      return true;   }   return false; }
var words = ["recieve","deceive","percieve","deceit","concieve"]; 
var misspelled = words.filter(afterc); 
print(misspelled); // displays recieve,percieve,concieve 


/// Arrays in Objects 

function weekTemps() {   this.dataStore = [];   this.add = add;   this.average = average; }
function add(temp) {   this.dataStore.push(temp); }
function average() {   var total = 0;   for (var i = 0; i < this.dataStore.length; ++i) {      total += this.dataStore[i];   }   return total / this.dataStore.length; }
var thisWeek = new weekTemps(); 
thisWeek.add(52); thisWeek.add(55); thisWeek.add(61); 
thisWeek.add(65); thisWeek.add(55); thisWeek.add(50); 
thisWeek.add(52); thisWeek.add(49); print(thisWeek.average()); // displays 54.875 




var arr = ["Emdad","Kifayet","Sagor","Shourov","Sadd","Sohag","Sakib"];
var con = function(e){ return e == "Emdad" }
arr.filter(con)   // ["Emdad"]
arr.reverse(con)  // ["Emdad", "Kifayet", "Sagor", "Shourov", "Sadd", "Sohag", "Sakib"]


arr.push("push") // 8 ( return element number & change the original array )
// arr ["Emdad", "Kifayet", "Sagor", "Shourov", "Sadd", "Sohag", "Sakib", "push"]

arr.pop("push")  // "push" find elemnt so this out put
// arr ["Emdad", "Kifayet", "Sagor", "Shourov", "Sadd", "Sohag", "Sakib"]
arr.reverse()  // ["Sakib", "Sohag", "Sadd", "Shourov", "Sagor", "Kifayet", "Emdad"]
JSON.stringify( arr.reverse(), null, 2 );
var mapArr = arr.map(function(x){ return x + 'from kazi family' });
JSON.stringify(mapArr, null, 4 );
/*
"[
    "Sakibfrom kazi family",
    "Sohagfrom kazi family",
    "Saddfrom kazi family",
    "Shourovfrom kazi family",
    "Sagorfrom kazi family",
    "Kifayetfrom kazi family",
    "Emdadfrom kazi family"
]"
*/

// Use of Reduce 

// Exp 1


var testArr = [10,20,30];
var sumDig = testArr.reduce(function(sum,ele){
              // console.log("sum ->" + sum);
              return sum += ele;
            }, 0 );

console.log(sumDig); // 60

// Exp 2

var str = "emdad CSE php 3 \n abdullah CSE php 4 \n tusher CSE php 4";
          
//console.log(str);

var subStr;
var obj = {};
var arr = str.trim()
             .split("\n")
             .map(function(ele){ 
                return ele.trim()
                          .split(" ");
             });

//console.log( JSON.stringify(arr, "emdad" ,4 ));



var result = arr.reduce(function(obj,ele, i){
    
   // console.log( JSON.stringify(ele[0],null,4));
  
   obj[ele[0]] = { Dept : ele[1] , Lang : ele[2]  };
   return obj;
  
}, {} );
             
console.log(JSON.stringify( result, null, 4 ) );
result.emdad.Dept;

/*
{
    "emdad": {
        "Dept": "CSE",
        "Lang": "php"
    },
    "abdullah": {
        "Dept": "CSE",
        "Lang": "php"
    },
    "tusher": {
        "Dept": "CSE",
        "Lang": "php"
    }
}
"CSE"
*/


var str = "emdad CSE php 3 \n abdullah CSE php 4 \n tusher CSE php 4 \n emdad CSE php 5";
          
          //console.log(str);

var subStr;
var obj = {};
var arr = str.trim()
             .split("\n")
             .map(function(ele){ 
                return ele.trim()
                          .split(" ");
             });

//console.log( JSON.stringify(arr, "emdad" ,4 ));



var result = arr.reduce(function(obj,ele, i){    
   // console.log( JSON.stringify(ele[0],null,4));
   obj[ele[0]] = obj[ele[0]] || [];
   obj[ele[0]].push( { Dept : ele[1] , Lang : ele[2] , Exp : ele[3] } );
   return obj;  
}, {} );
             
console.log(JSON.stringify( result, null, 4 ) )
//typeof result
result.emdad[1].Exp // 5

/*
{
    "emdad": [
        {
            "Dept": "CSE",
            "Lang": "php",
            "Exp": "3"
        },
        {
            "Dept": "CSE",
            "Lang": "php",
            "Exp": "5"
        }
    ],
    "abdullah": [
        {
            "Dept": "CSE",
            "Lang": "php",
            "Exp": "4"
        }
    ],
    "tusher": [
        {
            "Dept": "CSE",
            "Lang": "php",
            "Exp": "4"
        }
    ]
}
*/


/**
    Data structure
**/

function list() {   
  this.listSize = 0;   
  this.pos = 0;   
  this.dataStore = [];
} 


list.prototype.append = function(element){
    this.dataStore[this.listSize++] = element;
};


list.prototype.find = function(element) {
    for (var i = this.listSize - 1; i >= 0; i--) {
      if( this.dataStore[i] === element ){
        return i;
      }  
   }; 

   return -1;
};

list.prototype.remove = function(element) {
    var elePos = this.find(element);
    if( elePos === -1 ){ 
      console.log('This is not a valid element'); 
      return false;
    }else{   
      this.dataStore.splice(elePos,1); 
      this.listSize--; 
      return true;
    }
}

list.prototype.length = function(argument) {
    return this.listSize;
}

list.prototype.toString = function() {
    return this.dataStore;
}

list.prototype.contains = function(element) {
   return this.find(element) > -1 ? true : false;
};

list.prototype.front = function() {
   this.pos = 0;
};

list.prototype.end = function() {
   this.pos = this.listSize - 1;
};

list.prototype.prev = function() {
   this.pos > 0 ? --this.pos : console.log("Already U are at the beginning");
};

list.prototype.next = function() {
   this.pos < this.listSize -1 ? ++this.pos : console.log("Already U are at the end");
};

list.prototype.currPos = function() {
   return this.pos;
};

list.prototype.moveTo = function(position) {
   return this.pos = position;
};

list.prototype.getElement = function() {
   return this.dataStore[ this.pos ];
};


function List(argument) {
   return new list();
}


for(i in window){
  console.log(i);
}



/*
  this.toString = toString;   
  this.insert = insert;   
  this.append = append;   
  this.remove = remove;   
  this.front = front;   
  this.end = end;   
  this.prev = prev;   
  this.next = next;   
  this.length = length;   
  this.currPos = currPos;   
  this.moveTo = moveTo;   
  this.getElement = getElement;   
  this.length = length;   
  this.contains = contains; 

*/


// angular 2 by pure js 


// add it into dom
<template id="pony-tpl">   
  <style>     h1 { color: orange; }   </style>  
  <h1>General Soda</h1> 
</template>


var PonyComponentProto = Object.create(HTMLElement.prototype);
// add some template using the template tag 
PonyComponentProto.createdCallback = function() {   
  var template = document.querySelector('#pony-tpl');   
  var clone = document.importNode(template.content, true);   
  this.createShadowRoot().appendChild(clone); 
};
var PonyComponent = document.registerElement('ns-pony', {prototype: PonyComponentProto}); 
document.body.appendChild(new PonyComponent());



//  polyfill


Array.prototype.forEach = function(callback, thisArg) {
  if(typeof(callback) !== "function") {
    throw new TypeError(callback + " is not a function!");
  }
  var len = this.length;
  for(var i = 0; i < len; i++) {
    callback.call(thisArg, this[i], i, this)
  }
}

var arr = [1,2,3];
arr.forEach(function(item, index, th) {
  console.log(item, index, th);
});


























