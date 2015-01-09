---
layout: post
title: "Safari 6 Developer Tools Quick look"
date: 2012-07-29 00:52
comments: true
categories: css
---

TOC
<pre>
Introduction
Process
Accessing developer tool
Shortcuts
Anatomy
	Navigation sidebar
		Resources panel
		Storage
		Instrument
		Search
		Issue
		Debug
		Breakpoint
		Log
	Content browser
	Details sidebar
</pre>
###Introduction

Safari 6 web developer tool has substantial makeover from previous versions. It helps to prototype, debug and optimize web sites and safari extensions.

###Process
Web development process can be generalized as follows. Developer tool can accelerate this process.

![Web development process](//lh4.googleusercontent.com/-6xgNkaaKKdc/UBSqeeNqZ_I/AAAAAAAAEGk/PQhQIXrG1Xo/s500/prototype.jpg)

***Prototype*** 
Prototype using HTML, CSS & javascript. Safari Snippet editor can help to create and test code snippets / functional modules. Use web Inspector console to find any errors in the code. User agent switcher will help to quickly check code is working as expected in different browsers and devices. Open site in other browsers and devices directly from safari develop menu.

<!-- more -->

***Test & debug*** 
Test in different browsers and platforms. Web Inspector shows all the bugs and structural error in the code. Console, issue navigator, Breakpoint navigator, database navigator & log will help to identify error.

***Optimize*** 
Tune your site for blazing performance by minimizing load time and avoiding performance bottlenecks. Instrument navigator provides tool to analyze and profile site. It shows how much time it take to load a particular resource, site latency due to any server side scripts, missing resources, css selector performance, javascript evaluating and rendering time etc..

###Accessing developer tool
By default developer tool is not activated. Activate it from preference > advanced tab pane.

![Accessing developer tool safari 6](//lh3.googleusercontent.com/-wzsTXJ5dRgM/UBPg-SbOiTI/AAAAAAAAEEc/lIXZi6ExWks/s912/Safari%2520web%2520developer%2520-%2520preference%2520-advanced.jpg)

###Safari developer tool shortcuts

Web Inspector : <code>cmd + opt + I [mac] ctrl + alt + I [win]</code>

Console : <code>cmd + opt + c [mac] ctrl + alt + c [win]</code>

Clear console : <code>cmd + K or ctrl+ L [mac] ctrl + L [win]</code>

Debugger

Step Out : <code>F8 or cmd + shift + ;</code>

Step Into : <code>F7 or cmd + ;</code>

Step over : <code>F6 or cmd + '</code>

Continue : <code>cmd +/ or cmd+shift+y</code>


###Anatomy
Web developer is divided into 3 main sections.

![Anatomy Developer tools Safari 6](//lh3.googleusercontent.com/-5TK3-1X2E8I/UBPab_ec_iI/AAAAAAAAEDw/opgGPYlQNSI/s1024/safari%2520developer%2520tool%2520.jpg)

1. Navigation sidebar
2. Content browser
3. Details sidebar

####Navigation sidebar

![Navigation sidebar](//lh4.googleusercontent.com/-trNjLxMyJbo/UBPhJjUWkfI/AAAAAAAAEEk/C5EESCCQ-eU/s512/Safari%2520developer%2520tool%2520-%2520navigation%2520sidebar.jpg)

This pane hosts main sections of web developer tool. It has a global search to filter resources/items in the currently selected navigator item.

Example : typing “script” will reveal all file names contain script. *.min.js will filter all min javascripts.

***Resource panel***
It shows all the resources used in current site – images, scripts, frames, stylesheets etc.

![Resource panel](//lh5.googleusercontent.com/-oACVskskWYk/UBQYpiGO2gI/AAAAAAAAEE0/osNBrT6q15w/s912/Decodize-1.jpg)

***Storage***
Storage helps with debugging client side storage. You can inspect local key-value storage, offline application cache, web database and cookies. Now you can edit and delete local storage data. Indexed DB is missing. It is possible to execute SQL command against displayed database. One problem I noticed is the missing clear command.

![Storage](//lh6.googleusercontent.com/-BHRhIu_QgJo/UBQZKH7ZtjI/AAAAAAAAEE8/Y1XPCDfmklE/s720/A%2520Simple%2520TODO%2520list%2520using%2520HTML5%2520WebDatabases%2520-%2520HTML5%2520Rocks-4.jpg)

***Instrument***
Optimizing web site is a tedious job. You have to know which script is blocking the site, which resource is taking more bandwidth etc.. Instrument provides tool to mitigate optimization issues. Instruments gives us a total view of network requests, css layout calculations and rendering and javascript events involved.

![Instrument](//lh4.googleusercontent.com/-1fGRX7zWxsU/UBQZa4B0y3I/AAAAAAAAEFU/koP0TwR8wgQ/s1024/Decodize-3.jpg)

a. Network Request Timeline
b. CSS Layout calculations
c. Javascript & Events

When network is selected content browser will show all the detailed list of resources that took the bandwidth & time to took to load. Hovering each item in content browser will bring a small icon that leads to the exact resource. Ex: image, js etc..

Click on the circle to profile your javascript or CSS to know what causes the site performance issue.

***Search***
Search panel helps to search file contents.

![Search](//lh5.googleusercontent.com/-kxiED1xyAIA/UBQZR2z9lZI/AAAAAAAAEFE/V0mKGvZs9mo/s1024/A%2520Simple%2520TODO%2520list%2520using%2520HTML5%2520WebDatabases%2520-%2520HTML5%2520Rocks-2.jpg)

***Issue***
Issues will list all the site structural and script issues. It shows all the errors encounter during the site load.

![Issue](//lh4.googleusercontent.com/-IsMGqm41jI0/UBQZoud1h6I/AAAAAAAAEF0/C0rU2DByraE/s1024/Decodize.jpg)

***Debug***
Script execution can be paused and examined in debug navigator.

![Debug](//lh4.googleusercontent.com/-zKJ-aNTaKNE/UBQZY3vYkOI/AAAAAAAAEFM/2K8eg9QZCWc/s1024/Decodize-3%25202.jpg)

***Breakpoint***
From resource navigator you can set breakpoints and can view the variables and call stacks.

![Breakpoint](//lh4.googleusercontent.com/-OhSGSGTEkIY/UBQZcPLLexI/AAAAAAAAEFc/l304UKHo0sY/s1024/Decodize-4%25202.jpg)

***Log***
It is the real console. There is a quick console and a log navigator. You can execute all console commands & scripts here.

![Log](//lh3.googleusercontent.com/-CvI4NrbA-9I/UBQfbeWljsI/AAAAAAAAEGE/KjDkmXACVIQ/s1024/Decodize%25202.jpg)

####Content browser

![Contant browser Safari developer tool](//lh5.googleusercontent.com/-8-KOh4BU_J0/UBQgsg2a2uI/AAAAAAAAEGM/ZtOHmAERg2E/s640/Decodize-8.jpg)

Content browser will show contents based on the selection made on the Navigator sidebar. You can access DOM of the current site from the content browser.

####Details sidebar

![Details sidebar](//lh4.googleusercontent.com/-OoJp9VshiPw/UBQhXHCP_eI/AAAAAAAAEGU/RKyr5i7zxxY/s1024/Decodize-1%25202.jpg)

Based on the content browser selection this panel reveals the resource type, CSS properties, javascript events etc.. here.

###Reference 
[Apple developer tool](http://developer.apple.com/library/safari/#documentation/appleapplications/Conceptual/Safari_Developer_Guide/1Introduction/Introduction.html)




































