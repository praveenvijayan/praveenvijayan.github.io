---
layout: post
title: "Getting started with Yeoman 1.0 Beta on Windows"
date: 2013-03-03 01:23
comments: true
categories: html
keywords: html5, presentations, slides, remote-contol, keynote, nodejs, socketio, web-app, jitsu, websocket
description: App to control html5 presentations. 
---

###Update 
***April 8th 2013***

***Yomen normal installation (npm install) works fine now. No need to do extra steps for windows.***

1. <code>install -g yo grunt-cli bower</code>
2. <code>yo webapp</code>
3. <code>npm install && bower install</code>
4. <code>grunt</code>



##Introduction.

Yeoman 1.0 Beta out a few days ago. Its not officially supported on Windows, as of now we have to do some extra work to make it work on windows. Installing this version is simpler than previous [Yeoman 0.9 on windows](http://decodize.com/css/installing-yeoman-front-end-development-stack-windows/). 

![Yeoman 1.0 Beta](//lh6.googleusercontent.com/-ABbM-YmiiwQ/UTJtmXMqdXI/AAAAAAAAFOo/aCThSsOZ8h0/s912/init.jpg)

Don't use Yeoman 1.0 Beta in production, it may have bugs. 

In new version tools are divided into 3 category.

![Yeoman yo, bower and grunt](//raw.github.com/yeoman/yeoman.io/gh-pages/media/workflow.jpg)

<!-- more -->

***[yo](http://yeoman.io)*** for scaffolding tools. <br>
***[grunt 0.4.0](http://gruntjs.com)*** as build tool. <br>
***[bower](http://twitter.github.com/bower/)*** as package management tool.

Bower and Grunt 0.4.0 will work on windows. I faced problem when installing Mocha and Imagemin.

##Installation
1. Install [nodejs](http://nodejs.org) if its not installed.
2. Uninstall previously installed gruntjs.
3. Install yo, grunt-cli and bower using:- <code>install -g yo grunt-cli bower</code> 

Note: You must install Compass if planned to use SASS/SCSS.

Create a project folder and open it in cmd. 

type: <code>yo webapp</code>

![Yeoman webapp](//lh5.googleusercontent.com/-CUD_PZfAZ0E/UTJtgqnQclI/AAAAAAAAFNs/AG_hbjFzMWg/s720/files.jpg)

It will ask you some questions about the type of the project. Once project created, open package.json and delete 

	"grunt-contrib-imagemin":"0.1.2"
	"grunt-mocha":"~0.2.2"

![Grunt package.json](//lh4.googleusercontent.com/-gE15X7PGCyg/UTJtlJutHfI/AAAAAAAAFOU/dnYptoDRM-U/s512/package-json.jpg)

Save it and run 

<code>npm install && bower install</code>

![npm install && bower install](//lh6.googleusercontent.com/-Ms1FbZpVr3I/UTJtj2-wK9I/AAAAAAAAFOM/mBN-XHQIy_8/s720/npm-install-and-bower.jpg)

Sit and relax, it will install all project dependencies. Run following command once installation completes. 

	npm install grunt-contrib-imagemin

![imagemin](//lh5.googleusercontent.com/-bTw6y61G08Y/UTJthdzVB2I/AAAAAAAAFN8/i-VL1BWdNUk/s720/imagemin.jpg)

It installs optipng and jpegtran. After installation open package.json and add <code>"grunt-contrib-imagemin":"0.1.2"</code> in the list. 

Now comes the hardest part : Mocha test suite installation.

Go to [phantomjs.org ](http://phantomjs.org/) and [download phantomjs for windows](http://phantomjs.org/download.html) and extract it in a folder named 'phantom'. Its important to name it as phantom.

Run <code>npm install grunt-mocha</code>

Count on the messages and stop execution by pressing ctrl+c when you saw "Requesting..." (Terminate the batch job).

![Phantomjs](//lh3.googleusercontent.com/-8IY6Yw_6SxI/UTJtnIDs88I/AAAAAAAAFOk/_eS8LsePVrY/s720/phantom.jpg)

Open the following location,
<code>node_modules/grunt-mocha/node-modules/grunt-lib-phantomjs/node_modules/phantomjs/lib/</code>
copy and paste phantom folder (extracted files from phantomjs.org) here.

![phantom location](//lh6.googleusercontent.com/-kMjUR0MXWhk/UTJti3I4kJI/AAAAAAAAFOE/CQDn9akBaPo/s655/lib.jpg)

Open  package.json from project root folder and add <code>"grunt-mocha":"~0.2.2"</code> back to the list. Close cmd and reopen it. Now everything in place and we can play with yeoman commands.

run <code>grunt</code>

This will generate production quality version of your app in dist folder. 

![Yeoman build version](//lh3.googleusercontent.com/-UcV7VaD3fYo/UTJtgzrVrMI/AAAAAAAAFN0/nWk_TDQpJVw/s576/build.jpg)

##Yo commands

	yo webapp - creates project structure
	grunt test - test against Mocha test suite
	grunt server - runs your app in local server
	grunt watch - watch modified fles and recompile it. 

More on [Yeoman 1.0 beta](//yeoman.io/gettingstarted_1.0.html)
		[Yeoman github documentation](//github.com/yeoman/yeoman/wiki)

##Errors may encounter during installation

Some of the following issues may encounter during the installation.

#### Bower error status code of git :127

I got error 128 when I tried powershell.

![Git environment variable](//lh6.googleusercontent.com/-da-gBAq5pMU/UTNPTVyFnBI/AAAAAAAAFO4/UhNm4e4qcH0/s640/yo-bower.jpg)

Solution: add Git path in windows environment variables.

[![Git environment variable solution](//lh5.googleusercontent.com/-cpgqYXV60Hc/UTNPYeH0w1I/AAAAAAAAFPA/R1cTl9pkoUg/s576/setEnvironment-variable.jpg)](//lh5.googleusercontent.com/-cpgqYXV60Hc/UTNPYeH0w1I/AAAAAAAAFPA/R1cTl9pkoUg/s2000/setEnvironment-variable.jpg)

#### Error listen EADDRINUSE ....

Sometimes when you use <code>grunt server</code>, may encounter this error. This is because of the port is being used by another program. Find the program which uses the port. 

<code>netstat -aon | grep 35729</code> to filter the port and PID. Open task manager and kill the process. Run grunt server again. 
  
[![EADDRINUSE](//lh6.googleusercontent.com/-skPfc85wpMI/UTNUZrwsLEI/AAAAAAAAFPY/DakhPLwG-EU/s1024/pid-taskmanager.jpg)](//lh6.googleusercontent.com/-skPfc85wpMI/UTNUZrwsLEI/AAAAAAAAFPY/DakhPLwG-EU/s2000/pid-taskmanager.jpg)


##Summary
Yeoman 1.0 Beta is simpler than previous version. There are differences in the way command supplies, previously to boot up local server we used 'yeoman server', but now it is 'grunt server'. Yeoman, grunt and bower are separated in this version and it is more flexible than previous Yeoman 0.9. 









