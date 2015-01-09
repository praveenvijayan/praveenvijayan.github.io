---
layout: post
title: "Weight scale using HTML5 drag &amp; drop and CSS3 rotation"
date: 2012-04-2 00:14
comments: true
categories: css
---

![Weight scale using HTML5 drag &amp; drop and CSS3 rotation](//lh5.googleusercontent.com/-sWfGV-4_nWw/UNn15N7DaWI/AAAAAAAAFCY/FZtIQfW70ok/s628/html5-drag-and-drop-css3-rotation-weight-scale.jpg "Weight scale using HTML5 drag &amp; drop and CSS3 rotation")

Lets start with a demo (only works in chrome).

[Weight scale](http://www.decodize.com/demos/Weight%20scale%20using%20HTML5%20drag%20&%20drop%20CSS3%20rotation/weight.html)

***Usage*** 

Drag and drop weight block into scale [over doted outline]. Double click to remove a weight. Demo uses jQuery for DOM manipulation, css3 rotation for needle movement.

***HTML5 Drag and drop basics***

Before implementing [check the readiness of drag and drop](http://html5please.com/#drag) Currently it better to use jQuery UI or other JavaScript libraries to do a better cross browser handling.

<!-- more -->

HTML5 Drag and drop based on the Microsoft IE’s original implementation (IE5 and up). Image and links are dragabble by default in browsers. Proof? try drag and drop them in the address bar, you will be taken to the specified image/link. Set draggable=”true” in order to make other elements draggable.

HTML5 Drag and drop based on the Microsoft IE’s original implementation (IE5 and up). Image and links are dragabble by default in browsers. Proof? try drag and drop them in the address bar, you will be taken to the specified image/link. Set draggable=”true” in order to make other elements draggable.

	<div draggable="true">Im a draggable content</div>

Okay, now about drop zone. There is no droppable=”true”!!. We have to handle it via javascript events. Following are the events related to DnD.

* dragstart
* drag
* dragenter
* dragleave
* dragover
* drop
* dragend

	<div draggable="true" id="drag">Im a draggable content</div>
	<div id="dropzone">Drop area</div>
	<script>
	var elem = document.getElementById('drag');
	    elem.addEventListener('dragstart', function(e){
	      //Do whatever on when user start dragging.
	       
	    }, false)
	</script>

Next step is to drop our dragged payload. We need 2 events (dragover and dragenter) in order to make an element drop capable.

	<div draggable="true" id="drag">Im a draggable content</div>
	<div id="dropzone">Drop area</div>
	<script>
	var elem = document.getElementById('drag'),
	    dropZone = document.getElementById('dropzone');
	    elem.addEventListener('dragstart', function(e){
	      //Do whatever on when user start dragging.
	    }, false);
	    
	elem.addEventListener('dragenter', function(e){
	      //Things like visual cued for the drop zone can be added here.
	    }, false);

	elem.addEventListener('dragover', function(e){
	     //Things like visual cued for the drop zone can be added here.
	  }, false);

	</script>

Now we have to do the actual drop. ‘dataTransfer’ holds the draged object. dataTransfer.getData(‘text/html’) will get you the actual dragged element.

	var dropZone = document.getElementById('dropzone');
	 elem.addEventListener('drop', function(e){
	      e.preventDefault();
	      dropZone.innerHTML = e.dataTransfer.getData('text/html');      
	    }, false)

***Summary***

DnD spec is not completed & it is also painful to develop a cross browser DnD solution with pure API now.

***Resources***

[Native HTML5 Drag and Drop – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/dnd/basics/)
[Drag and drop html play ground](http://playground.html5rocks.com/#drag_and_drop)
[Drag and Drop Mozilla MDN](https://developer.mozilla.org/En/DragDrop/Drag_and_Drop)
[Article on useragentman.com](http://www.useragentman.com/blog/2010/01/10/cross-browser-html5-drag-and-drop/)




































