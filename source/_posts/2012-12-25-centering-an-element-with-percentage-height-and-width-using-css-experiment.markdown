---
layout: post
title: "Centering an element with percentage height &amp; width using CSS [Experiment]"
date: 2012-2-19 21:08
comments: true
categories: css
---

Its just a quick post on a small issue I came across, when trying to center a div using absolute. There are couple of methods to make an element center. Quick way is to make it absolute & give 50% top & left and negate margin top & left with a value half of the width & height of the element.

***Eg:***

	#box{
	    position:absolute;
	    width:200px;
	    height:200px;
	    top:50%;
	    left:50%;
	    margin-left:-100px;
	    margin-right:-100px;
	}
	<!-- HTML -->
	<div id="box">
	</div>

Above code will work in all browsers flawlessly. But consider the following css.

<!-- more -->

	#box{
	    position:absolute;
	    width:50%; /*Changed to percentage width*/
	    height:50%; /*Changed to percentage height*/
	    top:50%;
	    left:50%;
	    margin-left:-25%;
	    margin-right:-25%;
	}
	<!-- HTML -->
	<div id="box">
	</div>

This code will fail in Firefox & Opera. Other browsers it just works fine. There is a work around to make it center. Check the following code.

	#box {
	    position:absolute;
	    width:50%;
	    height:50%;
	    top:50%;
	    left:50%;
	    margin-left:-25%;
	}
	#newBox{
	    position:absolute;
	    top:-50%;
	    left:0;
	    bottom:50%;
	    right:0;
	    background:green;
	}
	<!-- HTML -->
	<div id="box">
	     <div id="newBox">
	      </div>
	</div>

This code will center the newBox in all browsers. Responsive centering. Automatically adjust with container width.

[check it on jsfiddle](http://jsfiddle.net/cEDXx/12/)
