---
layout: post
title: "Simplest full fledged code editor using data:text/html"
date: 2012-3-2 21:19
comments: true
categories: css
---

![Javascript code Editor](//lh6.googleusercontent.com/-o3pkztrrh04/UNnMiffDXjI/AAAAAAAAE94/oHhv550Ac4o/s603/javascript-code-editor.jpg "Javascript code Editor")

In one of [Paul Irish](http://paulirish.com/)’s presentation [“The Primitives of the HTML5 Foundation”](http://dl.dropbox.com/u/39519/talks/html5-foundation/index.html#1). He showed creating a simplest code editor using data uri [link](http://dl.dropbox.com/u/39519/talks/html5-foundation/index.html#38). Inspired from it, I created a small full fledged JavaScript code editor [code highlight & line number] using Code mirror 2 & data uri.

Following is the code from the presentation. Paste the code in your browser's adress bar and convert it into a simple code editor.

	data:text/html,<pre contenteditable>

<!-- more -->

Following code create a full javascript code editor using [Code mirror 2](http://codemirror.net/).

	data:text/html,<link rel="stylesheet" type="text/css" href="https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.css">
	<script src="https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.js"></script>
	<script src="http://www.decodize.com/codemirror/mode/javascript/javascript.js"></script>
	<link rel="stylesheet" type="text/css" href="http://www.decodize.com/codemirror/doc/docs.css">
	<style type="text/css">.CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}</style>
	<h1>JavaScript code editor</h1>
	<textarea id="code" name="code"></textarea>
	<script>var editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,matchBrackets: true});</script>

Copy & paste code in browser's address bar and it magically changes your browser in to a javascript code editor with syntax highlight & line number.

Adding following code will change browser in to a CSS editor.

	data:text/html,<link rel="stylesheet" type="text/css" href="https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.css">
	<script src="https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.js"></script>
	<script src="https://raw.github.com/marijnh/CodeMirror/master/mode/javascript/javascript.js"></script>
	<link rel="stylesheet" type="text/css" href="https://raw.github.com/marijnh/CodeMirror/master/doc/docs.css">
	<style type="text/css">.CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}</style>
	<textarea id="code" name="code"></textarea><script>var editor = CodeMirror.fromTextArea(document.getElementById("code"), {lineNumbers: true,matchBrackets: true});</script>

Creating a bookmarklet let us access to code editor instantly. Drag and drop the following bookmarklet in to your bookmark region and click it to transform the browser into a javascript code editor.

<a style="background:#eee; border:1px solid #ccc; padding:10px; border-radius:10px;" href="data:text/html,&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.css&quot;&gt;&lt;script src=&quot;https://raw.github.com/marijnh/CodeMirror/master/lib/codemirror.js&quot;&gt;&lt;/script&gt;&lt;script src=&quot;https://raw.github.com/marijnh/CodeMirror/master/mode/javascript/javascript.js&quot;&gt;&lt;/script&gt;&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;https://raw.github.com/marijnh/CodeMirror/master/doc/docs.css&quot;&gt;&lt;style type=&quot;text/css&quot;&gt;.CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}&lt;/style&gt;&lt;h1&gt;JavaScript code editor&lt;/h1&gt;&lt;textarea id=&quot;code&quot; name=&quot;code&quot;&gt;&lt;/textarea&gt;&lt;script&gt;var editor = CodeMirror.fromTextArea(document.getElementById(&quot;code&quot;), {lineNumbers: true,matchBrackets: true});&lt;/script&gt;" title="javascript code editor" target="_blank">JavaScript code editor</a>



Since code mirror has so many supported modes: you can create code editors based on modes. Check out [Code mirror 2](http://codemirror.net/).































