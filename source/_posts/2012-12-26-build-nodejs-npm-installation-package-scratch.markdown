---
layout: post
title: "How to build a nodejs npm package from scratch."
date: 2012-05-7 00:25
comments: true
categories: javascript
---

Aim is to create a node package and publish it in npm registery. This is a simple example code with which you can understand all the process involved to create, install and publish node packages.

###What is nodejs?

Hmm.. you will get plenty of good resources when you google it with this keyword. Start by installing it from here : [nodejs](http://node.org/)

###What is npm?

[Node package manager](http://npmjs.org/) and it is used to add or remove node applications. It came as a default package in newer node installations, both windows and mac. Install it on other platforms by refering this [resource](https://github.com/isaacs/npm). Check out all the [npm registry entries here](http://search.npmjs.org/).

Install your fevorite application – 
	npm install app-name.
Example:- 
	npm install jsbeautify
<!-- more -->

###First node program

***Prerequisite***

*Install nodejs
*Github account [Optional]

***Objective***

Create a nodejs application that reads a file and replace all the matching text in it with the one that you pass as an argument.

Eg:- readme.txt content – “Drink like a dog”

	replaceme readme.txt dog cat

//out.txt – Drink like a cat

###Agenda

[Setting up base – folder structure](#base)
[Creating node modules and require it in other modules](#modules)
[Read & write file using node](#readwirte)
[Passing arguments from CLI](#args)
[Creating package.json](#json)
[Packaging application](#package)
[Adding users to npm registry](#npm)
[Publishing application](#publish)
[Uninstallling application from system](#uninstall)
[Unpublishing application from npm registry](#unpublish)


###Setting up base – folder structure

Application’s folder structure as follows.

	replaceme
	   - bin
	   --- replaceme.js
	   - lib
	   --- main.js
	   --- replace.js
	   package.json
	   README.md

Open cmd and type <code>mkdir replaceme && cd replaceme && mkdir bin && mkdir lib</code>. Create replacement.js, main.js and replace.js inside respective folders.

***Create replace function***

	var text = "To live long, eat like a cat, drink like a dog.";
	var out = text.replace('cat','dog');
	console.log(out);

Run it with 
	
	c:\>replaceme\lib\> <code>node replace.js</code>
	//Output – To live long, eat like a dog, drink like a dog.

***Node modules***

Next step is to convert above code into a node module so that we can require it in other js/modules. Incuding an external javascript in our document is simple – require(‘modulejs’);.

	//replaceme.js
	exports.replaceme = function(text, vala, valb){
		function out(val){
			return text.replace(vala,valb);
		}
		return out(vala,valb);
	}

exports.functionName – Its the simplest way to create a module & now replaceme is a module. We can import it in main.js as require(‘./replaceme’);

More informations on creating modules – [check this link](http://book.mixu.net/ch8.html)

	c:\>replaceme\lib\> node
	> re = require('./replaceme')
	> re.replaceme("The text to replace","replace","add")
	> The text to add

Our module is functioning now. Now create main.js.

	//main.js

	(function() {
		//Declaring variables  
		var fs, reptxt, filedata;

		//Requiring files
		fs = require('fs');
		reptxt = require ('./replaceme');

		//Reading file test.txt
		fs.readFile("../test.txt",'utf8',function(err,data){
		  if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		 }
		 //Calling replacement function
		 console.log(reptxt.replaceme(data,"npm","123"));
		});

	}).call(this)

Main.js reads file content and passes the content to replaceme function. It will output replaced string.

***Read file using node file module***

Now we have to write its out put into a file and save it in the same dir. It is also possible to overwrite the same file.


	//main.js

	(function() {
		//Declaring variables  
		var fs, reptxt, filedata;

		//Requiring files
		fs = require('fs');
		reptxt = require ('./replaceme');

		//Reading files
		fs.readFile("../test.txt",'utf8',function(err,data){
		  if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		 }
		 //Calling replacement function
		 filedata = reptxt.replaceme(data,"npm","123");

		 //Writing replaced text into a new file
		fs.writeFile("../out.txt", filedata, function(err){
			  	if(err) {
					console.error("Error saving file %s", err);
					process.exit(1);
			  	}
				console.log('out.txt file saved!');
			});

		});

	}).call(this)


Now when we run node command <code>node main.js</code> you will see a new file named ‘out.txt’.

***Passing arguments***

We neeed to pass our filename as an argument. ‘process.argv’ used to catch arguments that passes through CLI. It gives us an array containing commandline arguments. We have to process this array & get the required values.

Here in our example we are passing 3 arguments ‘the file, keyword, replace word’ – 

	node main.js text.txt cat dog

This is the native way to parse commandline arguments. There are other libraries available for easy parsing of arguments [optimist, commander etc... ].


	// print process.argv - node main.js ../text.txt cat dog
	process.argv.forEach(function (val, index, array) {
	  console.log(index + ': ' + val);
	});

	//Output
	0: node
	1: path/main.js
	2: ../text.txt
	3: cat
	4: dog

We need 2,3 & 4 values. Note: its not a best practice to parsing parameter like this. Its better to use any [node libraries](https://github.com/joyent/node/wiki/modules#wiki-parsers-commandline).

	(function() {
		//Declaring variables  
		var fs, reptxt, filedata;

		//Requiring files
		fs = require('fs');
		reptxt = require ('./replaceme');

		//Reading files
		fs.readFile(process.argv[2],'utf8',function(err,data){
		  if(err) {
			console.error("Could not open file: %s", err);
			process.exit(1);
		 }
		 //Calling replacement function
		 filedata = reptxt.replaceme(data,process.argv[3],process.argv[4]);

		 //Writing replaced text into a new file
		fs.writeFile("../out.txt", filedata, function(err){
			  	if(err) {
					console.error("Error saving file", err);
					process.exit(1);
			  	}
				console.log('out.txt file saved!');
			});

		});

	}).call(this)

Now we got 3 arguments ‘../text.txt, cat, dog’. node main.js ../text.txt cat dog this node command will read text.txt and replace all the “cat” text with “dog” and output the result in ‘out.txt’.

***Bin folder – replaceme file***

This file is the entry point. We point to this file from package.json.

    #!/usr/bin/env node
    var path = require('path');
    var fs = require('fs');
    var lib = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
    require(lib + '/main.js');

###Preparing to publish

***Creating package.json***

This text file contains all the information about the project, like project path, dependencies, author name, tags, bug tracking info etc.. To create a package.json run npm init command from the root folder. It will ask series of questions and finally it will create package.json file.

Our package.json file will look like this.

	{
	  "author": "praveen vijayan ",
	  "name": "replaceme",
	  "description": "Node commandline application to replace selected text in a file.",
	  "version": "0.1.1",
	  "repository": {
	    "url": ""
	  },
	  "main": "./lib/main",
	  "bin": {
	    "replaceme": "./bin/replaceme"
	  },
	  "dependencies": {},
	  "devDependencies": {},
	  "optionalDependencies": {},
	  "engines": {
	    "node": "*"
	  }
	}

***Add new user to npm registry***

	npm adduser	

Provide username & email address. This command will register a new user into npm registry.

***Finally publish to npm registry***

	npm publish 

and test by installing it

	npm install -g replaceme

***Uninstall node package***

	npm uninstall -g replaceme

***Unpublish from npm registry***

	npm unpublish replaceme@0.1.1

###Upload files into github

It is not a compelsory part but it is a best practice to update your files to github and add links in package.json. Open README.md file created earlier and add basic info about your project using markdown syntax. Commit all files into git and activate issue tracker from account.

###Download files

[Download files](http://www.decodize.com/demos/nodejs/replaceme.zip)

[npm registry link](http://search.npmjs.org/#/replaceme)

happy nodding :)
















































































