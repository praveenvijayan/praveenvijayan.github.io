---
layout: post
title: "Simple Responsive image technique"
date: 2013-01-04 00:19
comments: true
categories: html
keywords: images, Responsive Web Design (RWD), adaptive images, CDN, Image resize, mobile
description: Serving resized images in Responsive Web Design.
---

RWD (Responsive Web Design) is increasingly popular over past few years. One important problem faced by RWD is lack of a standardised solution to deliver resized images into multiple devices. We have wide range of device categories, screen resolutions, pixel densities and lack of bandwidth/connection detection methods, all made this process difficult.  There is no simple silver bullet  to solve this issue. 

This is a quick post on a simple technique I used to create responsive image. This is a javascript solution, but it will work in javascript disabled environment by using a noscript fallback. This technique will start with mobile image first & there is no need to parse and replace image sources.  
<!-- more -->
I’m using google picasa as my image host. I can resize images dynamically by setting width/height in the url. 

[Responsive images demo](http://demos.decodize.com/responsive-images/demo.html "Responsive images" target="_blank")

Eg: 
//lh3.googleusercontent.com/-Rw0hpxt70co/ULeX80ncW3I/AAAAAAAAE6g/kIDj6u1zdyI/<strong>s640</strong>/query-loader1.jpg

Setting <strong>s320</strong> will create image with width/Height (resize proportionally) 320px. We can also pass width or height. Setting <strong>w320</strong> will create an image with width 320px or passing <strong>h320</strong> will constrain height of dynamically created image to 320px. Now we have our server, which can provide us different images sizes upon request. 

You can use your own server methods or other resources like [src.sencha.io](http://www.sencha.com/learn/how-to-use-src-sencha-io/) to resize images on the fly.

###Technique

Using css fluid image technique scale image to viewpot. Get the device size and insert image using script. 

***CSS***
``` css
	img { 
		display: block; 
		border: 0; 
		max-width: 100%; 
	}
```

***JavaScript*** <br>
``` javascript
	<script>
	    var cwResImg = function () {
		var cwBpArry = [1382, 992, 768, 480], //Image breakpoint arrays
			currIndex,
			cwResImgVal = Math.max(screen.width,screen.height),
			hdpi = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1,
			rwdImgId = "rwdimg-"+Math.floor(Math.random()*1000),
			tpl='<img src="{src}" alt="{alt}" title="{title}" id="{rwdImgId}" {attributes}>';

		cwBpArry.push(cwResImgVal);
		cwBpArry.sort(function(a,b){return a-b});

		if(Array.prototype.indexOf){
			currIndex = cwBpArry.indexOf(cwResImgVal) + 1;
		}else{
			for(var i in cwBpArry){
				if(cwBpArry[i] === cwResImgVal){
					currIndex = parseInt(i)+1;
				}
			}		
		}

		cwBpArry[currIndex] = cwBpArry[currIndex] || cwBpArry[currIndex-1];

		var imgWid = Math.max.apply(Math, cwBpArry) <= cwBpArry[currIndex] ? cwBpArry[currIndex-2] : cwBpArry[currIndex];

		return { 
			imgWid : imgWid,
			hdpi: hdpi,
			id:rwdImgId,
			rwdImg:function(arg){
				
				var src = arg.src || arguments[0] || '',
					src = src.replace(/\/s\d*\//, '/s'+imgWid * hdpi+'/'), //picasa image size replacing (s340 to device width)
					title = arg.title || arg.alt || arguments[1] || '',
					alt = arg.alt || arg.title || arguments[2] || arguments[1] || '',
					attributes = arg.attr || arguments[3] || '',
					img = tpl.replace('{src}',src).replace('{title}',title).replace('{alt}',alt).replace('{rwdImgId}',rwdImgId).replace('{attributes}',attributes);
					document.write(img)
			}
		};
	}()
	</script>
``` 
Paste it in your page header. This will set width of the screen into ‘cwResImg’ variable. You can set image breakpoints in this variable <code>cwBpArry = [1382, 992, 768, 480];</code> 

***HTML*** <br>
Replace images in HTML with. 
```html
	<noscript>
		<img src="http://lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/s720/Webpagetest-IE8-Octopress-Default-waterfall.png" alt="Responsive images test">
	</noscript>
	<script>
		cwResImg.rwdImg("http://lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/s450/Webpagetest-IE8-Octopress-Default-waterfall.png", 'Responsive images text script');

		---or----

		cwResImg.rwdImg({src:'http://lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/s450/Webpagetest-IE8-Octopress-Default-waterfall.png', alt:'Responsive images text script', title:'Responsive images text script'});
	</script>
```

It has two parts <br>
1) noscript tag contains a standard image for fallback. If js is not supported, this image will show.

2) Script part <br>
Syntax
``` javascript
	cwResImg.rwdImg("src","alt","title","class='myclass'");
	or
	cwResImg.rwdImg({src:"src", alt:"alt",title:"title",attr:"class='myclass'"})
```
``` javascript
	cwResImg.rwdImg("http://lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/s450/Webpagetest-IE8-Octopress-Default-waterfall.png","Responsive images text script","Responsive images text script"); 
```

JavaScript variable ‘cwResImg’ will replace by the max width of the device.

When page loads url will be like the following, if its a desktop with resolution more than 1382px

//lh6.googleusercontent.com/-IdiwvKGQ8Lk/UN9KOZvdW7I/AAAAAAAAFDk/iSvy1_SZrrM/<strong>s1382</strong>/RTT%2520Decodize%2520github.png

###Demo

[Responsive images](http://demos.decodize.com/responsive-images/demo.html "Responsive images" target="_blank")

###Performance and Bandwidth
After including this there is a noticeable performance improvement in iPhone waterfall view.

Before (11.866s) <br>
<noscript>
<img src="//lh6.googleusercontent.com/-VQbJXZuyy2g/UOXNzTDn7EI/AAAAAAAAFGY/4WE49NLo3Os/s800/Before%2520responsive%2520image.jpg" alt="Before responsive image" title="Before responsive image">
</noscript><script>
cwResImg.rwdImg("//lh6.googleusercontent.com/-VQbJXZuyy2g/UOXNzTDn7EI/AAAAAAAAFGY/4WE49NLo3Os/s800/Before%2520responsive%2520image.jpg","Before responsive image");
</script>


After (8.841s) <br>
<noscript>
<img src="//lh5.googleusercontent.com/-M18BajmhKdE/UOXNzNWfpvI/AAAAAAAAFGU/RIjb8u81HeI/s800/After%2520responsive%2520image.jpg" alt="After responsive image" title="After responsive image">
</noscript><script>
cwResImg.rwdImg("//lh5.googleusercontent.com/-M18BajmhKdE/UOXNzNWfpvI/AAAAAAAAFGU/RIjb8u81HeI/s800/After%2520responsive%2520image.jpg","After responsive image");
</script>

***Drawbacks*** <br>
Messy HTML. <br>
Accessibility 


