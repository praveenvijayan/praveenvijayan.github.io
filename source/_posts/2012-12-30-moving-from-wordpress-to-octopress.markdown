---
layout: post
title: "Moving from Wordpress to Octopress redesign notes"
date: 2012-12-30 00:00
comments: true
categories: html
keywords: octopress, static site generators (SSG), performance, optimization, SEO octopress, wordpress, Jekyll, GitHub
description: Re-design note on migrating from wordpress to octopress. Note includes octopress optimization, octopress SEO tips.
---

##Why I migrated from Wordpress to Octopress.

***Speed and performance*** <br>
Octopress framework uses [Jekyll](https://github.com/mojombo/jekyll) [SSG (Static Site Generator)](https://github.com/mojombo/jekyll/wiki "Static Site Generator") to build pages. All pages are static and no server side processing involved. Requested page can deliver instantaneously by the server into user's machine.

***Hosted at Github*** <br>
Site is hosted on Github as [Github Pages](https://help.github.com/articles/what-are-github-pages). Since its in Github, server uptime and response time are guaranteed.

***Ease of use*** <br>
After setting up everything, 2 steps involved in creating and publishing your next post

	$ rake new_post["new post"]
	$ rake deploy.

***Markdown*** <br>
Octopress uses [Markdown](http://daringfireball.net/projects/markdown/ "Markdown"). Its simple & clean as writing a text file/email.

<!-- more -->

***Clear, simple & responsive Octopress theme*** <br>
Octopress theme is responsive and fit nicely in tablet and phones. Theme built with HTML 5 Boilerplate(HB5) & SCSS.

***Editor freedom*** <br>
No more miss-formatted posts, adjustment '&lt;br&gt;' or switching between ‘HTML’ and 'Visual' tab in wp post editor to align content correctly. You can use any text editor to write blog post.

***No DB / No Dynamic pages ***<br>
No DB, no dynamic pages, no routing etc.. Everything is static, so no server side processing costs involved.

***Minimal page weight***<br>
Semantic markup and no unnecessary tag inclusion by cms.

***Improved RTT***<br>
RTT (Round trip delay) are better and shorter now.

Old wordpress site
<noscript>
<img src="//lh5.googleusercontent.com/-Ht__EMuyHO0/UN9KN_USHAI/AAAAAAAAFDg/4SJUk6b1CP8/w800/RTT%2520Kerala%2520eco%2520conference%2520.png" alt="Responsive images text script">
</noscript><script>
document.write('<img src="//lh5.googleusercontent.com/-Ht__EMuyHO0/UN9KN_USHAI/AAAAAAAAFDg/4SJUk6b1CP8/w'+cwResImg.imgWid+'/RTT%2520Kerala%2520eco%2520conference%2520.png" alt="Responsive images text script">')
</script>

Octopress Github page
<noscript>
<img src="//lh6.googleusercontent.com/-IdiwvKGQ8Lk/UN9KOZvdW7I/AAAAAAAAFDk/iSvy1_SZrrM/w800/RTT%2520Decodize%2520github.png" alt="Round trip delay after">
</noscript><script>
document.write('<img src="//lh6.googleusercontent.com/-IdiwvKGQ8Lk/UN9KOZvdW7I/AAAAAAAAFDk/iSvy1_SZrrM/w'+cwResImg.imgWid+'/RTT%2520Decodize%2520github.png" alt="Round trip delay after">')
</script>

Tested using [just-ping.com](http://just-ping.com/ "Just ping")

***No more plugin hassle***<br>
Bye bye to w3 total cache, SEO plugins, broken and heavy social plugins etc..

***Version control and Collaboration***<br>
Pages are hosted in Github, version control comes naturally. Collaboration is possible through fork & pull requests.

***More control over script loading***<br>
Its difficult to edit/delete scripts and css loaded by third party plugins in wordpress. In Octopress it like editing html file.

***Better security***<br>
This site was hacked once. Wordpress has security flaws. Github is more secured than wordpress.

***Preloaded plugins***<br>
Octopress comes with some default plugins - Disqus, Twitter, Delicious, Facebook, Pinterest, Analytics etc..

***Migration options***<br>
You can switch from other blogging platforms (wp, drupal etc..) to octopress without much frustration.

***Other SSG Options***<br>
If octopress sucks somewhere, other options are available [Hacker news](http://news.ycombinator.com/item?id=4857473), [List of SSG](http://iwantmyname.com/blog/2011/02/list-static-website-generators.html)


###Tips, SEO & performance

***Migrating posts from wordpress***<br>
I have tried ‘WordPress to Jekyll Exporter’ but it didn’t worked for me. Since, I have manageable no of posts, I manually converted all of them into markdown. If you have too many posts, [Exitwp](https://github.com/thomasf/exitwp "Exitwp") may be a good option.

***URL mapping***<br>
Octopress default permalink structure is /blog/:year/:month/:day/:title/. We have to set it right with old wp permalink structure. I changed it to /:categories/:title/. We can configure it in _config.yml.

***Social links***<br>
Set all social, search, feed links configuration settings in _config.yml.

	# Github repositories
	github_user:
	github_repo_count: 4
	github_show_profile_link: true
	github_skip_forks: true

	# Twitter
	twitter_user:
	twitter_tweet_count: 4
	twitter_show_replies: false
	twitter_follow_button: true
	twitter_show_follower_count: false
	twitter_tweet_button: true

	# Google +1
	google_plus_one: true
	google_plus_one_size: medium

	# Google Plus Profile
	# Hidden: No visible button, just add author information to search results
	googleplus_user:
	googleplus_hidden: false

	# Pinboard
	pinboard_user:
	pinboard_count: 3

	# Delicious
	delicious_user:
	delicious_count: 3

	# Disqus Comments
	disqus_short_name:
	disqus_show_comment_count: false

	# Google Analytics
	google_analytics_tracking_id:

	# Facebook Like
	facebook_like: yes

***SEO***<br>
Octopress won't create keywords and description for each post. Added two new fields, keyword and description on each new post for better SEO optimizations.

	---
	layout: post
	title: "Moving from Wordpress to Octopress redesign notes"
	date: 2012-12-30 00:00
	comments: true
	categories: html

	keywords: octopress, static site generators (SSG), performance, optimization, SEO octopress, wordpress, Jekyll, GitHub
	description: Re-design note on migrating from wordpress to octopress. Note includes octopress optimization, octopress SEO tips.
	---

***Google analytics***<br>
Added google Analytics ID in _config.yml and included {&nbsp;% include google_analytics.html %} in custom footer.  Otherwise google analytics won’t appear in all page.  

	# Google Analytics
	google_analytics_tracking_id:

***Disqus***<br>
Added Disqus shortname in ‘disqus_short_name:’ field. You must migrate all comments to new domain in order to appear it in new site. Login to your disqus account. Go to Admin > Migrate threads tab.  Run domain migration wizard. It might take a full day to populate all comments in your blog.

_config.yml
	# Disqus Comments
	disqus_short_name:
	disqus_show_comment_count: false

login to disqus.com

<noscript>
<img src="//lh3.googleusercontent.com/-oQlo1HNnRDw/UN9MnzGMM9I/AAAAAAAAFEM/nqeW80edwqs/w800/Disqus%2520migration.png" alt="Discuss comment migration" title="Discuss comment migration">
</noscript><script>
document.write('<img src="//lh3.googleusercontent.com/-oQlo1HNnRDw/UN9MnzGMM9I/AAAAAAAAFEM/nqeW80edwqs/w'+cwResImg.imgWid+'/Disqus%2520migration.png" alt="Discuss comment migration" title="Discuss comment migration">')
</script>

***Images and videos***<br>
I have hosted media on [picasaweb google](https://picasaweb.google.com). Its better to host all your media like images and videos in flickr or google picasa.

Advantages of uploading images in picasa are <br>
1) Images will be delivered from CDN (free). <br>
2) Images will cache &amp; resize on the fly. <br>
3) We can create custom image sizes. <br>
4) [Optimize image](http://support.google.com/picasa/answer/13821?hl=en) by selecting image quality.

	//lh3.googleusercontent.com/-Rw0hpxt70co/ULeX80ncW3I/AAAAAAAAE6g/kIDj6u1zdyI/s640/query-loader1.jpg

s640 - is the key. It will set image size to 640. Also, we can use w640 or h640. This values will restrict width and height respectively.

AAAAAAAAE6g/kIDj6u1zdyI/<strong>s100</strong>/query-loader1.jpg  - <small>width/height 100px</small>  <br>
AAAAAAAAE6g/kIDj6u1zdyI/<strong>w200</strong>/query-loader1.jpg  - <small>width 200px </small> <br>
AAAAAAAAE6g/kIDj6u1zdyI/<strong>h50</strong>/query-loader1.jpg  - <small> height 50px </small>

5) Automatic [domain sharding](http://www.stevesouders.com/blog/2009/05/12/sharding-dominant-domains/) by google for uploaded images.

Browser has restriction on concurrent connections per hostname (HTTP1.1 states its 2 connections, but modern browsers has more than that - [check here](http://www.browserscope.org/?category=network&v=top "Browserscope"). Advantage of domain sharding is browser can parallelly download more resources. Following are some locations from where image is fetching.

	lh3.googleusercontent.com
	lh4.googleusercontent.com
	lh5.googleusercontent.com
	lh6.googleusercontent.com


***Performance improvements***<br>
All pages are static. HTML files will quickly downloaded into user’s machine. Following are some changes I made in default files to leverage performance.  

I. Moved google font api file to top

includes/custom/head.html - file contains google fontface css. <code> {&#37; include custom/head.html %} </code> moved above all scripts tag.
``` html
	<link rel="canonical" href="{{ canonical }}">
	<link href="{{ root_url }}/favicon.ico" rel="icon">
	{ % include custom/head.html %} //Moved above all script tags
	<link href="{{ root_url }}/stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css">
	<script src="{{ root_url }}/javascripts/modernizr-2.0.js"></script>
	<script src="{{ root_url }}/javascripts/ender.js"></script>
	<script src="{{ root_url }}/javascripts/octopress.js" type="text/javascript"></script>
	<link href="{{ site.subscribe_rss }}" rel="alternate" title="{{site.title}}" type="application/atom+xml">
```

Its always better to load css first.

II. Reduce SSL negotiation time by removing https: from image src.
I'm using google picasa as my media host, so urls are https:// by default. I didn't noticed SSL negotiation time in IE until I tested site in [wepagetest.org](http://www.webpagetest.org/).

	https://lh3.googleusercontent.com/-myRXm2caL_w/UFGha2n2IMI/AAAAAAAAEeA/NuBd3P0YJ0Y/s700/Yeoman.png

Chrome dev tool won't display this delay, since chrome SSL negotiations are unnoticeable.

Following is the webpage test result in IE

Before (8.087s) <br>
<noscript>
<img src="//lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/w800/Webpagetest-IE8-Octopress-Default-waterfall.png" alt="IE with SSL Negotiation" title="IE with SSL Negotiation">
</noscript><script>
document.write('<img src="//lh6.googleusercontent.com/-nI33VLdtmFo/UN9MmPN6bHI/AAAAAAAAFEE/1uJBJ7-plEs/w'+cwResImg.imgWid+'/Webpagetest-IE8-Octopress-Default-waterfall.png" alt="IE with SSL Negotiation" title="IE with SSL Negotiation">')
</script>

After (4.019s) <br>
<noscript>
<img src="//lh4.googleusercontent.com/-ddWa47F1i6M/UN9MqTf7C7I/AAAAAAAAFEU/SU3C8Z6iuGw/s800/Webpage%2520test-IE8-Octopress-Optimised-waterfall.png" alt="IE without SSL Negotiation" title="IE without SSL Negotiation">
</noscript><script>
document.write('<img src="//lh4.googleusercontent.com/-ddWa47F1i6M/UN9MqTf7C7I/AAAAAAAAFEU/SU3C8Z6iuGw/s'+cwResImg.imgWid+'/Webpage%2520test-IE8-Octopress-Optimised-waterfall.png" alt="IE without SSL Negotiation" title="IE without SSL Negotiation">')
</script>

III. Behavior of loading third party scripts. Following third party scripts are loading in this site

Google analytics <br>
Twitter recent files <br>
Facebook <br>
Google+ <br>
Twitter share <br>
Disqus

There will be a huge performance improvement when we load all the third-party scripts after pageload event. Octopress is using [Social button BFFs](http://www.phpied.com/social-button-bffs/) to load scripts asynchronously (also async in script). But its not enough [Check this link](http://www.aaronpeters.nl/blog/why-loading-third-party-scripts-async-is-not-good-enough), third party scripts are still blocking or using network resources of the original site content. There is no use of loading third party script with out loading actual site contents first. So we have to load all social stuffs after page load.

Following waterfall is from an inside page.

Before optimization : Dom loaded [blue line] 18.330s and Start render at 4.312s<br>
<noscript>
<img src="//lh6.googleusercontent.com/-ksYcr5Gbruc/UOCCVvijlRI/AAAAAAAAFEw/GsCRmWDu5IQ/w800/Webpagetest-IE-Octopress-Defaults-Detail-page-Waterfall-01.jpg" alt="Before optimization" title="Before optimization">
</noscript><script>
document.write('<img src="//lh6.googleusercontent.com/-ksYcr5Gbruc/UOCCVvijlRI/AAAAAAAAFEw/GsCRmWDu5IQ/w'+cwResImg.imgWid+'/Webpagetest-IE-Octopress-Defaults-Detail-page-Waterfall-01.jpg" alt="Before optimization" title="Before optimization">')
</script>

After optimization : Dom loaded [Blue line] 4.019s and Start render at 2.679s<br>
<noscript>
<img src="//lh5.googleusercontent.com/-g9fnDhqrhP8/UOCDyeFvdUI/AAAAAAAAFFY/DgJqsCNW9Ls/w800/Webpagetest-IE-optimised-details.png" alt="After optimization" title="After optimization">
</noscript><script>
document.write('<img src="//lh5.googleusercontent.com/-g9fnDhqrhP8/UOCDyeFvdUI/AAAAAAAAFFY/DgJqsCNW9Ls/w'+cwResImg.imgWid+'/Webpagetest-IE-optimised-details.png" alt="After optimization" title="After optimization">')
</script>

When you compare above waterfalls, in second one all social and sharing scripts and resources initiated by them are start loading only after onload event.

When we insert third party scripts it not only loads and parse. It also requests another scripts and image resources. When we inserting it on document ready, our original site content is still loading. Third party resource requests will block network. It not only helps to reduce network requests but, also helps browser for better Garbage collection and faster painting. Quicker onload event help to execute our custom scripts on dom much earlier (eg: show/hide some element, show message etc..)

Changes made on following files inside <code>source/_includes</code>

	twitter_sharing.html
	google_plus_one.html
	facebook_like.html
	disqus.html
	asides/twitter.html

I have used modified version of lazy loading third party scripts.
``` html
	<script>
	(function(w, d, s) {
	  function go(){
	    var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
		  if (d.getElementById(id)) {return;}
		  js = d.createElement(s); js.src = url; js.id = id;
		  fjs.parentNode.insertBefore(js, fjs);
		};
	    load('//connect.facebook.net/en_US/all.js#appId=272697932759946&xfbml=1', 'fbjssdk');
	    load('https://apis.google.com/js/plusone.js', 'gplus1js');
	    load('//platform.twitter.com/widgets.js', 'tweetjs');
	  }
	  if (w.addEventListener) { w.addEventListener("load", go, false); }
	  else if (w.attachEvent) { w.attachEvent("onload",go); }
	}(window, document, 'script'));
	</script>
```

1) twitter_sharing.html
``` html
	<script>
		(function(w, d, s) {
		  function go(){
		    var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
			  if (d.getElementById(id)) {return;}
			  js = d.createElement(s); js.src = url; js.id = id; js.async = true;
			  fjs.parentNode.insertBefore(js, fjs);
			};
		    load('http://platform.twitter.com/widgets.js', 'twitterwid');
		  }
		  if (w.addEventListener) { w.addEventListener("load", go, false); }
		  else if (w.attachEvent) { w.attachEvent("onload",go); }
		}(window, document, 'script'));
	</script>
```

2) asides/twitter.html

Twitter feeds will only start loading after page completely loaded.
``` html
	<script>
	    (function(w, d, s) {
	      function go(){
	        var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
	        if (d.getElementById(id)) {return;}
	        js = d.createElement(s); js.src = url; js.id = id; js.async = true;
	        $(js).load(function(){
	            getTwitterFeed("{{site.twitter_user}}", {{site.twitter_tweet_count}}, {{site.twitter_show_replies}});
	        });
	        fjs.parentNode.insertBefore(js, fjs);
	      };
	        load('{{ root_url }}/javascripts/twitter.js', 'recentTweets');
	      }
	      if (w.addEventListener) { w.addEventListener("load", go, false); }
	      else if (w.attachEvent) { w.attachEvent("onload",go); }
	    }(window, document, 'script'));
	</script>
```

3) disqus.html
```html
	<script type="text/javascript">
		var disqus_shortname = '{ { site.disqus_short_name }}';
		{ % if page.comments == true %}	 
			// var disqus_developer = 1;
			var disqus_identifier = '{ { site.url }}{ { page.url }}';
			var disqus_url = '{ { site.url }}{ { page.url }}';
			var disqus_script = 'embed.js';
		{ % else %}
			var disqus_script = 'count.js';
		{ % endif %}

		(function(w, d, s) {
			function go(){
			var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
			if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.src = url; js.id = id; js.async = true;
				fjs.parentNode.insertBefore(js, fjs);
			};
			load('http://' + disqus_shortname + '.disqus.com/' + disqus_script, 'discuss');
			}
		if (w.addEventListener) { w.addEventListener("load", go, false); }
		else if (w.attachEvent) { w.attachEvent("onload",go); }
		}(window, document, 'script'));
	</script>
```

You can download all files from [here](http://demos.decodize.com/octopress/Octopress_optimised_social_networ_files.zip) and can replace your existing octopress files for better performance.


###Summary

I'm really satisfied with octopress till now.
