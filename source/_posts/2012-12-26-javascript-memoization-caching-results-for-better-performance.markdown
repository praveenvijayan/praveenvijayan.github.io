---
layout: post
title: "JavaScript Memoization – Caching results for better performance."
date: 2012-08-27 01:35
comments: true
categories: javascript
---

##Introduction
Memoization is a technique used to cache result of a previously calculated value thus can avoid the need to recalculate.

Simplest example.

	function square(num){
	    return num*num;
	}

	square(10) //100

Each time when we call square(), value will re-calculate. Caching result is importent when we do CPU intensive tasks.

Re-writing above code using cache
<!-- more -->
###Method 1

	function square(num){
	  var result = '';
	  if(!square.cache[num]){ 
	     console.log("Computing value...");
	     result = num*num;
	     square.cache[num] = result;  
	  }

	  return square.cache[num];

	}

	square.cache = {}

	square(10) //First time when we call this function. It calculates the value &amp; cache it.
	square(10) // Second time onwards it return the result from cache.
	square(20) // square function will calculate again if its a new value.


![Javascript Memoization](//lh5.googleusercontent.com/-cgSoKZkhTP8/UDqBhExqEJI/AAAAAAAAEWI/AbmfwJR7drM/s512/Screen%2520Shot%25202012-08-27%2520at%252012.39.49%2520AM.png)

###Method 2 Using hasOwnProperty

This method is useful when there are multiple arguments.

	var square = function(num){

	            var key = Array.prototype.slice.call(num).join(""); 
	            // This won’t work if argument send as Object. Eg:-  newFun({name:”my name”, age:20});

		if(!square.cache[key]){
			var result={};

	                result = num *num;
			//Computation
	          console.log("Computing value...");      
		square.cache[key] = result;
	}

	return square.cache[key];
	}

	square.cache = {};

###Method 3 Using JSON.stringify, Array.join or argument.callee.

This method is useful when there are multiple arguments.

	var square = function(num){

	            var key = Array.prototype.slice.call(num).join(""); 
	            // This won’t work if argument send as Object. Eg:-  newFun({name:”my name”, age:20});

		if(!square.cache[key]){
			var result={};

	                result = num *num;
			//Computation
	          console.log("Computing value...");      
		square.cache[key] = result;
	}

	return square.cache[key];
	}

	square.cache = {};


----or----

	var square = function(num){
	    var key = JSON.stringify(Array.prototype.slice.call(num));

	    if(!square.cache[key]){
		var result={};
		//Computation
	        console.log("Computing value..."); 
	        result = num*num;
		square.cache[key] = result;
	}

	return square.cache[key];
	}

	square.cache = {};

---or----

	var  square = function(num){
		var thisFunc = arguments.callee, result;
	           if(!thisFunc.cache[num]){
	                   result = {}
	                   //Computation
	                   console.log("Computing value..."); 
	                   result = num*num;
	                   thisFunc.cache[num] = result;
	           }
	return thisFunc.cache[num];
	}

	square.cache = {}

Above method is not recommended since arguments.callee should be avoid and ECMAScript forbids use of arguments.callee() in strict mode.

###Method 4

This will create a higher-order function called memoize() that accepts function and return a memoized version of it.

	function memoize(f){
	                var cache = {};

	                return function(){

	                    var key = JSON.stringify(Array.prototype.slice.call(arguments));

	                    if(key in cache){
	                        console.log('From cache...')
	                        return cache[key]
	                    }else{
	                        console.log('Computing..')
	                        return cache[key] = f.apply(this,arguments);
	                    }

	                }

	            }

	//Usage

	var squareMem = memoize(square)
	squareMem(10);//100

![JavaScript Memoization](//lh4.googleusercontent.com/-Vl_3-kx6pRc/UDqBfFrRCqI/AAAAAAAAEV8/dcvtEihpM08/s512/Screen%2520Shot%25202012-08-27%2520at%25201.18.22%2520AM.png)

---Or---

	Function.prototype.memoiz = function(){

	               var cache = {}, self = this;

	               return function(arg){

	                   var key = JSON.stringify(Array.prototype.slice.call(arguments));

	                   if(key in cache){
	                        console.log('From cache...')
	                        return cache[key]
	                    }else{
	                        console.log('Computing..')
	                        return cache[key] = self(arg);
	                    }

	               }

	            }

	//Usage
	var squareMem = square.memoiz()
	squareMem(10); 
	squareMem(20);
	squareMem(30);
	squareMem(40);
	squareMem(50);

![JavaScript Memoization](//lh6.googleusercontent.com/-OTRcR6v1NuA/UDqBflwl-hI/AAAAAAAAEWA/xzuGB97mrek/s512/Screen%2520Shot%25202012-08-27%2520at%25201.20.38%2520AM.png)

Under Closure section you can find all the cached results

![JavaScript Memoization](//lh5.googleusercontent.com/-N2SfLU7PSW8/UDqBf5yr77I/AAAAAAAAEWE/S3zNNYRPCH8/s640/Screen%2520Shot%25202012-08-27%2520at%25201.34.25%2520AM.png)

[memoiz.js](https://github.com/addyosmani/memoize.js/blob/master/memoize.js) is a memoization library hosted in Github.

References
[Faster javascript memoization](http://addyosmani.com/blog/faster-javascript-memoization/)
[Speed up your JavaScript, Part 3](http://www.nczonline.net/blog/2009/01/27/speed-up-your-javascript-part-3/)
[A Better Javascript Memoizer](http://unscriptable.com/2009/05/01/a-better-javascript-memoizer/)



















































