---
layout: post
title: "Mac OSX shortcuts"
date: 2012-08-11 01:21
comments: true
categories: osx
---

I’m using both windows and mac. Sometimes I missed up with keyboard shortcuts. Both OS has its own plus and minus. Enter/Return key opens a folder in windows but it renames file/folder in mac, in windows double clicking on titlebar maximize window, but same thing minimizes window in mac (you have to enable it from preference > doc – “Double-click a windows titlebar to minimize”).

####Global shortcuts

Quickly open finder

	cmd + opt + spacebar = win + E

![Open Finder](//lh4.googleusercontent.com/-NEHHy_dLllU/UCVXbNfCbGI/AAAAAAAAES0/ddsv_OHrYNg/s720/Searching%2520%25E2%2580%259CThis%2520Mac%25E2%2580%259D-2.jpg)
<!-- more -->
Close window
	cmd+w = crtl + w

Show desktop
	fn + f11 = win + D

Lock screen
	shift + ctrl + power = win + L

Force quit applications
	cmd+opt+esc = ctrl+shift+esc

![Force Quit](//lh6.googleusercontent.com/-ei7AF6UFl9w/UCVW5E8AmyI/AAAAAAAAERQ/ZUsg5uFn9AY/s576/Force%2520Quit%2520Applications.jpg)

Switch between opened application
	cmd+tab = ctrl+tab / win+tab

Switch between same application window
	cmd + ~

Increase volume or brightness by quarter increment
	shift+option+f12 – volume
	shift+opton+f2 – brightness

![Volume](//lh4.googleusercontent.com/-SwukWiuyJSs/UCVXHzH396I/AAAAAAAAERw/hpzYPZ-ytKI/s912/Screen%2520Shot%25202012-08-10%2520at%252010.27.58%2520AM.png)

Show/Hide – Dock
	opt+cmd+D

Screen capture
	shift + cmd + 3
	shift + cmd + 4

####Finder shortcuts

Mac automatically refreshes every folder when something modifies [fails sometimes]. One annoying thing when working with finder is icons are not arranging automatically to grid.

There are a few ways to arrange items in finder. Clean up command will snap item to grid. Following key stocks will arrange items in a nice way and these are roughly equal to ‘Refresh’ (F5) in windows.

	cmd+opt+1 – clean up by name
	cmd+opt+2 - clean up by kind
	cmd+opt+5 - clean up by date modified
	cmd+opt+6 - clean up by size
	cmd+opt+7 - clean up by type

Tip 1: Drag and release folder while pressing cmd will arrange folder/files to grid.
Tip 2 : Press opt key & right click -> ‘Arrange by’ will change to ‘Sort by’. You can sort using name, kind, size etc..

![Clean up by](//lh5.googleusercontent.com/-wfG0sXeGOyg/UCVXPcZusrI/AAAAAAAAESI/RjdwjzaTVSk/s640/Screen%2520Shot%25202012-08-10%2520at%252010.33.59%2520PM.png)

Go to folder
	cmd+shift+G
network 
	cmd + K
using terminal
	open <path>
Parent folder
	cmd + uparrow
open folder
	cmd+down
back
	cmd+[
forward
	cmd+] 

Open folder
	cmd + downarrow or cmd+o = enter

Duplicate a file/folder
	cmd+D

Open a folder in terminal from finder.
You can use either Drag n Drop folder into terminal icon or enable service “New terminal at folder” from Preference > keyboard. Right click on any folder and select “New terminal at folder” from the context menu.

![Open a folder in terminal from finder](//lh3.googleusercontent.com/-BE1lWJlrp04/UC8bALRPrfI/AAAAAAAAEU8/q0VrvYI79aw/s512/Screen%2520Shot%25202012-08-18%2520at%25209.59.20%2520AM.png)

![Open current folder from terminal to finder](//lh6.googleusercontent.com/-LyNVvOKCsw4/UC8a_B1ebkI/AAAAAAAAEU0/GtPDSVVWNz8/s512/Screen%2520Shot%25202012-08-18%2520at%252010.01.07%2520AM.png)

<code>$ open .</code>

![Open folder](//lh3.googleusercontent.com/-PSHfkVtXd0w/UC8cUWZiTuI/AAAAAAAAEVE/HeNKjPfxStg/s1024/Screen%2520Shot%25202012-08-18%2520at%252010.08.20%2520AM.png)

####Hidden screencast tool

Quicktime has a screen capture tool.

![Quicktime screencast](//lh6.googleusercontent.com/-tIFgswYe28E/UCVXKE2EpII/AAAAAAAAER4/XBbuQaeHIbY/s800/Screen%2520Shot%25202012-08-10%2520at%252010.30.41%2520AM.png)

####Automator tips

![Automator Mac](//lh3.googleusercontent.com/--JBFAp3xrWI/UCVdH2oyRRI/AAAAAAAAETs/u2OasUerfrc/s896/HT2488_ottolaunchpad----en.jpeg)

Automator is a tool that helps to automate repeated tasks.

![Automator mac](//lh4.googleusercontent.com/-4z1LxPJ_h3E/UCVW5-I3-BI/AAAAAAAAERY/t_-EhPloRvk/s640/Automator.jpeg)

***Copy file path***

Some times you need to copy the path of a specified folder or file. You can use automator to copy the path.

1. Open automator
2. Select services
3. Change – “service receives selected” to “file or folder” in application to “Finder“.
4. Type “copy” in the filter section and drag n drop – “Copy to clipboard” to the workflow pane.
5. Save it as – “Copy file path”.

![Copy file path Automator mac](//lh4.googleusercontent.com/-mAwEJ9Z5aHA/UCVXS7ALcoI/AAAAAAAAESY/HAbkiw7ChM0/s1000/Screen%2520Shot%25202012-08-10%2520at%252011.00.44%2520PM.png)

Now you can right click on any folder/file and can copy path. Assign a keyboard shortcut from Preference > keyboard.

***Change image size***

![Change image size Automator mac](https://lh6.googleusercontent.com/-VzUV1wNoj-8/UCVhNu4uXcI/AAAAAAAAEUE/rCaiCKEoVX4/s576/Screen%2520Shot%25202012-08-11%2520at%252012.57.57%2520AM.png)

***Batch renaming files***

![Batch renaming files Automator](//lh4.googleusercontent.com/-cZ6phyLZdeU/UCVhNfxtthI/AAAAAAAAEUA/HNQO-1ZDZ1o/s576/Screen%2520Shot%25202012-08-11%2520at%252012.57.29%2520AM.png)


####Tools

***maximize window***
[Right zoom](http://www.macupdate.com/app/mac/30591/right-zoom/) is a little free tool that converts mac’s default maximize behavior to maximize window to all available screen space.

***Quick look plugins***
Do a 3 finger tap on any file will reveal a quick view with some basic info. You can extend its capabilities using plugins. Check quick look plugin to find more details.

[Quick look plugins](http://www.quicklookplugins.com/)

###Resources
[15 Automator and AppleScripts You Can’t Live Without](http://www.maclife.com/article/features/15_automator_and_applescripts_you_can%E2%80%99t_live_without)
[10 Awesome Uses for Automator Explained](http://mac.appstorm.net/how-to/applescript/10-awesome-uses-for-automator-explained/)





























