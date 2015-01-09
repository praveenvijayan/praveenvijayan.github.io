---
layout: post
title: "StyleDocco – Create generated style guide and documentation for your web project"
date: 2012-03-14 23:35
comments: true
categories: css
---

[StyleDocco](http://jacobrask.github.com/styledocco/ "StyleDocco") is a style guide and documentation generator. It parse CSS comments in your stylesheet and creates style guide based on the comments. Its a nodejs package and can install using npm install.

Example style document generated using styledocco – [twitter bootstrap](http://jacobrask.github.com/styledocco/examples/bootstrap/docs/index.html)

###Nodejs

It is JavaScript running on server using google’s V8 JavaScript engine. Download latest node installer (win/mac/source code) form [nodejs.org](http://nodejs.org/ "Nodejs") & install it.

![Nodejs](//lh4.googleusercontent.com/-qUi8aCGOZXE/UNnx0Jg6TRI/AAAAAAAAFA8/UaRKsCLNYDM/s576/nodejs.jpg "Nodejs")

After installation open command prompt and type “node -v”. You will get the node version number.

<!-- more -->

![Node version](//lh6.googleusercontent.com/-hKDLrHMsOx8/UNnx0UWXjcI/AAAAAAAAFBA/6PzH0mwVQvA/s597/node-version.jpg)

After nodejs installation, install StyleDocco via npm (Node package manager). In windows open command prompt/mac terminal  & type.

	npm install -g styledocco

In mac you have to type 

	sudo npm install -g styledocco

![npm install -g styledocco](//lh5.googleusercontent.com/-G6OPFhwUR2Y/UNnycaUmXXI/AAAAAAAAFBY/GBG-MXQEc2A/s597/styledocco-install.jpg "npm install -g styledocco")

It will install in few minute depending upon your connection speed.

###Preparing stylesheet for documentation

Styledocco uses [marked](//github.com/chjj/marked) to parse & generate HTML. First we will check a simple stylesheet (example from [author](//github.com/jacobrask/styledocco/blob/master/README.md)).


	/* Provides extra visual weight and identifies the primary action in a set of buttons <br/> ``` &lt;button&gt;Primary&lt;/button&gt; ``` */ <br/>.btn.primary { background: blue; color: white; }

![Styledocco](//lh4.googleusercontent.com/-9Rv1HOSqzr4/UNnxzzBrlhI/AAAAAAAAFA4/0weqZ_dvDFo/s597/readme-style-content.jpg "Styledocco")

Save the css on your site folder.  Now need a readme.md file. Create a text file and rename it to readme.md as save it on the same folder. In read me file you can use markdown to show the details about the style sheet. This readme will be the landing page of your style guide. Readme.md is required otherwise styledocco will throw an error.

![Style guide](//lh6.googleusercontent.com/-jpRyqwdtiUI/UNnx1JaszXI/AAAAAAAAFBE/l7_jgaRz3PM/s597/readme-style.jpg "Style guide")

###Style guide creation

***Syntax***

	styledocco [options] [INPUT]

***Options***

–name, -n Name of the project (required)
–out, -o Output directory (default: “docs”)
–tmpl Directory for custom docs.jade template (optional)
–overwrite Overwrite existing files (docs.css) in target directory.

***Usage***

Open command prompt and type.

	styledocco -n styleguide style.css

![styledocco -n styleguide style.css](//lh4.googleusercontent.com/-WlKoGiVGuYw/UNnzMWkRTHI/AAAAAAAAFBo/wrtdBo9Szv0/s597/styledocco-create.jpg)

Styledocco will parse all comment in the document & create style guide based on the comments provided in your css file. Styledocco uses [markdown syntax](http://daringfireball.net/projects/markdown/syntax).

![Styledocco](//lh4.googleusercontent.com/-cBE0-erg3As/UNnzLZYR1rI/AAAAAAAAFBg/bOfvY2Bbymc/s597/styledocco-output.jpg)

Your style document will create inside docs folder. If you want a different directory to store output files use -o in your styledocco create command (<code>styledocco -n styleguide -o c:\styleguide style.css </code>). Open index.html form docs folder and you can see a botton and its style description.

Styledocco is also capable of parsing LESS, SASS & SCSS files and can generate style documents. Twitter [bootstrap style guide](http://jacobrask.github.com/styledocco/examples/bootstrap/docs/less/buttons.html) is an example.

Use markdown syntax in your readme.md & stylesheet files. First & second level of heading will automatically split into sections. If you want to exclude a comment, that you wish not being parsed by Styledocco, add a few space in front of the comment.

Example -

	/*This comment will parse by Styledocco*/
	     /*No this is an internal style comment*/

Large web projects we can use style guide for future reference and  optimization.







































