---
layout: post
title: "Installing Yeoman Front-end development stack in Windows"
date: 2012-09-13 01:46
comments: true
categories: css
keywords: yeoman, build tool, font-end, windows, 
description: Installing Yeoman front-end developemnt bundle on windows.
---

	Updates
	14th Sep 2012 :
	1. Alternate method to install Yeoman using Chocolatey.
	2. Github Yeoman windows issues link.

	15th Sep 2012 :
	1. Added description (Chocolatey method).

	17th Feb 2013 :
	1. On Feb 15th 2013 Yeoman 1.0 BETA released. Its not supported on windows yet. 

	3rd March 2013 :
	1. Yeoman 1.0 Beta can be installed on windows.


This post is for Yeoman 0.9 and a new beta version, Yeoman 1.0 Beta is available and installation instructions can be found here [Yeoman 1.0 Beta installation on windows](http://decodize.com/html/getting-started-with-yeoman-1-dot-0-beta-on-windows/)

##What is Yeoman?

![Yeoman](//lh3.googleusercontent.com/-myRXm2caL_w/UFGha2n2IMI/AAAAAAAAEeA/NuBd3P0YJ0Y/s700/Yeoman.png "Yeoman")

Its a tool to make the front-end development workflow easier. It includes tools and front-end frameworks that helps to create web apps quickly and easily.

##Features 

Initialize and scaffold a new project<br>
Build & deploy app<br>
Launch server, preview & live reload<br>
Run automated tests using PhantomJS<br>
Install & update packages<br>
Customise your apps framwork<br>
Genarator for chrome app<br>
<!-- more -->
More on [Yeoman](http://yeoman.io/) 

##Installation

***MAC OSX & Linux Installations***
[Yeoman site](http://yeoman.io/gettingstarted.html)

###Install Yeoman using Chocolatey (Method 1)
Chocolatey is a package manager for windows. Its like Linux [apt-get](http://www.apt-get.org/). Once Chocolatey installed, you can install [Chocolatey packages](http://chocolatey.org/packages) from windows cmd. Install Chocolatey & type <code>cinst yeoman</code> it will prompt you to install all necessary tools one by one.

***Steps***

1. Goto [chocolatey.org](http://chocolatey.org/)
Chocolatey NuGet is a Machine Package Manager, somewhat like apt-get, but built with windows in mind.

2. Open cmd & paste

	<code>C:\> @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('http://bit.ly/psChocInstall'))" && SET PATH=%PATH%;%systemdrive%\chocolatey\bin</code>

3. Type

	<code>c:\> cinst yeoman</code>

It will fetch & install all dependent files.

Done!!

Yeoman installed on windows and now its time to play with yeoman commands. Close and reopen cmd. 

<code>C:\> yeoman init --disable-insight</code> 

This will create bolierplate for your next application. To launch preview server and run application locally use ```yeoman server --disable-insight```.

[more commands](#workingwithyeoman)

###Windows (Method 2)

***Prerequisites***

![Ruby Installer](//lh4.googleusercontent.com/-xoaNrBJVhb4/UFGhI1Yb-DI/AAAAAAAAEd4/H8jmtEmtWX0/h101/logo.png)

This is a self-contained Windows-based installer that includes the Ruby language, an execution environment, important documentation, and more.

[Download & install](http://rubyinstaller.org/downloads/)


![Compass](//lh5.googleusercontent.com/-D142mVO-EyY/UFGnTiAV55I/AAAAAAAAEfA/Dx2ozFXEWPg/h77/Compass.png)

Compass is an open-source CSS Authoring Framework.

[Download & install](http://compass-style.org/install/)

![Nodejs](//lh5.googleusercontent.com/-yezu0Kt1GQY/UFGUx47AG3I/AAAAAAAAEdc/Mwzq6Xh1o2I/h96/logo.png)

Node.js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

[Download & install](http://nodejs.org/download/)

![Git](//lh4.googleusercontent.com/-KCyI1MyDOHA/UFGoOQBtHKI/AAAAAAAAEfM/Cc-tabJ1rhw/h120/Git.png)

Git is a free and open source distributed version control system

[Download & install](http://git-scm.com/)

![Phantomjs](//lh4.googleusercontent.com/-eRZHYGs6OW0/UFHn-7pfyLI/AAAAAAAAEg8/cU3--xx6b38/h120/phantomjs.png)

PhantomJS is a headless WebKit with JavaScript API.

[Download & Install](http://phantomjs.org/download.html)  – You have to add path in [Windows Environment Variable](//lh6.googleusercontent.com/-iX-vxgYN8TA/UFHn-t4iB1I/AAAAAAAAEhA/DyqsFfxREP0/s483/phantomjs-path.png).

![Git windows](//lh5.googleusercontent.com/-Y8JiSvnxVCA/UFGoq4UoShI/AAAAAAAAEfU/MT8lHS4x9ww/s128/github-windows.png)

The easiest way to use Git on Windows. [Optional]

[Download & install](http://windows.github.com/)

![Python](http://www.python.org/images/python-logo.gif)

Python is a programming language that lets you work more quickly and integrate your systems more effectively. 

[Download & install](http://www.python.org/download/)

***Steps***

1.Download and install all above tools

There are 2 method to install Yeoman.<br/>
——a. Open command prompt & type <code>C:\npm install yeoman</code><br/>
——b. You can install using Git

Clone Yeoman using git.

![Git Yeoman](//lh5.googleusercontent.com/-gddq-GA3znE/UFGuEzDYy_I/AAAAAAAAEfw/eoQiF-cUTOM/s573/clone-yeoman.png)

--Or--

If you have installed  Github for windows tool. “Clone in windows” from Github Yeoman page.

![Git Windows app](//lh3.googleusercontent.com/-2ArR_EW7eJE/UFGjrlAT_AI/AAAAAAAAEeI/Wt1KPSGi3AI/s499/github.jpg)

Clicking on “Clone in Windows” will open up windows github tool.

![Git Windows app](//lh3.googleusercontent.com/-JC2F7-gm5IA/UFGkWaoooKI/AAAAAAAAEf4/4LhO6MhJv78/s728/yeoman.jpg)

After cloning right click and open files in explorer.

![Yeoman CLI](//lh4.googleusercontent.com/-Pg97eRwiXJk/UFGkXLTeaCI/AAAAAAAAEeU/o6juq4Tcw1w/s470/yeoman-file.jpg)

shift + right click inside the root folder. You will get an option “Open Command Window Here”.

	npm install -g

You will get following screen if its a success.

![Yeoman installation](//lh5.googleusercontent.com/-NSp0fAUcv2E/UFGUlSPGL6I/AAAAAAAAEdU/Y_ZOc_L0zqg/s677/yeoman-cmd.jpg)

Done!!
<a href="#" id="workingwithyeoman"></a>

###Working with Yeoman 


	yeoman init

![Yeoman init](//lh4.googleusercontent.com/-yTQAGVESviU/UFGVgz57ZrI/AAAAAAAAEdk/JNF3pcmFTgc/s677/yeoman-init.jpg)

![Yeoman server](//lh4.googleusercontent.com/-mpa2LuQhyzU/UFG6jVL5GjI/AAAAAAAAEgk/TDlSWMZtClA/s800/yeoman-server.png)

	yeoman init      # Initialize and scaffold a new project using generator templates
	yeoman build     # Build an optimized version of your app, ready to deploy
	yeoman server    # Launch a preview server which will begin watching for changes
	yeoman test      # Run a Mocha test harness in a headless PhantomJS

	yeoman install   # Install a package from the client-side package registry
	yeoman uninstall # Uninstall the package
	yeoman update    # Update a package to the latest version
	yeoman list      # List the packages currently installed
	yeoman search    # Query the registry for matching package names
	yeoman lookup    # Look up info on a particular package

[more commands and help](http://yeoman.io/commandline.html)

##Github Yeoman Windows issue

File bugs & issues here [github yeoman windows issue](https://github.com/yeoman/yeoman/issues/216)

##Summary

Its a super cool tool that helps to streamline front-end workflow.

##Resources

[Yeoman home page](http://yeoman.io/) <br>
[Yeoman Github page](https://github.com/yeoman/yeoman/) <br>
[Yeoman issues](https://github.com/yeoman/yeoman/issues) <br>
[Yeoman documentation](https://github.com/mklabs/yeoman/wiki/_pages)






























