---
layout: post
title: "PIXI : Tool to create a pixel perfect site."
date: 2012-10-23 02:41
comments: true
categories: css
---

I hate making sites pixel perfect, but some times its very important to match the site exactly with design. Earlier I have used tool like Pixel perfect – a Firefox Addon & also tried some JavaScript implimentations. Recent versions of FF is not supporting pixel perfect Addon. I filed to find anything that can serve my purpose. PIXI is small js & css file. When you activate PIXI you will get an overlay & you can drag n drop design mockup into it. You can adjust opacity, position and z-index.

<!-- more -->

[PIXI Demo](http://praveenvijayan.github.com/PIXI/code/) <br>
[PIXI Page](http://praveenvijayan.github.com/PIXI/) <br>
[PIXI Download](https://github.com/praveenvijayan/PIXI/zipball/master) <br>
<iframe class="iframe-git-button" src="http://ghbtns.com/github-btn.html?user=praveenvijayan&#038;repo=PIXI&#038;type=fork&#038;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="83px" height="30px"></iframe>

![PIXI](//lh3.googleusercontent.com/-Fbp6bxmgK14/UIWlG5oevvI/AAAAAAAAEqk/Z0K0iY5iCg4/s1152/PIXI-template.jpg)

Note: Demonstrated template is not mine.

###Install

Include pixi.js, pixi.css and jQuery in your site.

	<link rel="stylesheet" href="http://praveenvijayan.github.com/PIXI/code/pixi.min.css">

	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.2.min.js"></script>
	<script src="http://praveenvijayan.github.com/PIXI/code/pixi.min.js"></script>

###Usage

Press <kbd>G</kbd> to activate the overlay.
Drag n Drop design mockup/template into the overlay.

![PIXI](//lh6.googleusercontent.com/-Xppj0w92FYI/UIWlGk1eNtI/AAAAAAAAEqg/FEFuiuUOZv0/s1152/PIXI-overlay-drag.jpg)

Press <kbd>shift + &mouse; </kbd> drag image to adjust.

![PIXI](//lh3.googleusercontent.com/-63vaXnv7cvE/UIWlG9cqnwI/AAAAAAAAEqo/2_d82rr7lC0/s1152/PIXI-overlay.jpg)

Press <kbd>0-9</kbd> to set opacity.

###Shortcuts

<kbd>G</kbd> Toggle overlay.
<kbd>Z</kbd> Bring fornt or sent to back [z-index:0-9999].
<kbd>←</kbd>  Moves overlay image 1px left.
<kbd>→</kbd>  Moves overlay image 1px right.
<kbd>↑</kbd>  Moves overlay image 1px up.
<kbd>↓</kbd>  Moves overlay image 1px down.
<kbd>shift  + Drag</kbd> Moves overlay image.
<kbd>0  – 9</kbd> Sets overlay opacity.
<kbd>P</kbd>  – Disables overlay’s pointer event. When pointer event is none, you can’t drag n drop images. Activate it (press ‘P’) when you want to inspect underlaing elements.

###Browser support

PIXI uses HTML5 DnD, File API & Local storage to do things. It won’t work in IE. Tested in chrome & Firefox.

































