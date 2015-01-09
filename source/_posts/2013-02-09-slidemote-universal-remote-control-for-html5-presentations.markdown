---
layout: post
title: "Slidemote - Universal remote control for html5 presentations"
date: 2013-02-09 02:04
comments: true
categories: html
keywords: html5, presentations, slides, remote-contol, keynote, nodejs, socketio, web-app, jitsu, websocket
description: App to control html5 presentations. 
---

##Introduction
[Slidemote](http://slidemote.jit.su/) is a web app created for easy integration of remote control facility for html5 presentations. 

![Slidemote](http://lh3.googleusercontent.com/-WyqIyccQK7c/URVkeV4sTwI/AAAAAAAAFKA/xlbs8XU4eNk/s720/slidemote.jpg)
<!-- More -->
##Integration
1. Add following script in your presentation.
```<script type="text/javascript" src="http://slidemote.jit.su/slidemote.js#slidemote"></script>```
2. Append your id at the end of the script (Eg: ...slidemote.js#YOUR_ID ).
3. Goto - [Slidemote](http://slidemote.jit.su).
4. Enter YOUR_ID & connect.
5. Slidemote currently supports (basic level) - [revealjs](http://lab.hakim.se/reveal-js/), [impressjs](http://bartaz.github.com/impress.js/#/bored), [deckjs](http://imakewebthings.com/deck.js/) and [flowtime](http://flowtime-js.marcolago.com/).

##How it works?
Slidemote uses [socketio](http://socket.io/) to leverage websocket communication. Slidemote is hosted at [Nodejitsu](http://jit.su/), a nodejs hosting service. 

<code>http://slidemote.jit.su/slidemote.js#id</code>  will communicate to server with your ID. Provide same id at "http://slidemote.jit.su", it will establish a websocket connection.

##Demo

Go to [Slidemote](http://slidemote.jit.su) and enter following key and press connect. Once connected you are able to control this presentation. It will take a few seconds to connect, be patient. Don't refresh page, result will be a new key and you have to enter it again on 'slidemote.jit.su' to establish connection.

Key: <input type="text" id="slidemoteCode" class="txtSlidemoteCode" placeholder="Your key">

<iframe id="iframeRevealjs" src="http://demos.decodize.com/slidemote/revealjs/index.php" frameborder="0" width="100%" height="600"></iframe>

####&nbsp;
###Other demos
<span class="demoBtn"> <a href="http://demos.decodize.com/slidemote/flowtime/" target="_blank">Flowtime</a> <a href="http://demos.decodize.com/slidemote/impress/" target="_blank">Impress</a><a href="http://demos.decodize.com/slidemote/deckjs/" target="_blank">Deckjs</a></span>



##Screenshots
***Revealjs controls***<br>
![Revealjs](https://lh6.googleusercontent.com/-S0xne3Q_Q1M/URV4IL9AwXI/AAAAAAAAFKs/5SgrDTZ04qg/s512/slidemote-revealjs.jpg)<br>
***Deckjs & Impressjs controls***<br>
![Revealjs](https://lh4.googleusercontent.com/-QHEzN0zQhag/URV4HBI6b0I/AAAAAAAAFKc/wP8-a0Kgulk/s512/slidemote-deckjs.jpg)
<br> 
***Flowtime controls***<br>
![Revealjs](https://lh5.googleusercontent.com/-0oK11Krj8XQ/URV4HPWHfKI/AAAAAAAAFKo/emPooYJ733Q/s512/slidemote-flowtime.jpg)

##Video
<iframe width="560" height="315" src="http://www.youtube.com/embed/XSHjlieYgjg" frameborder="0" allowfullscreen></iframe>











