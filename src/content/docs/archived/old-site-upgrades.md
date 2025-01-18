---
title: Tina CMS and Other Upgrades
description:
  The process of setting up Tina CMS, and a few other upgrades.
---
![An image of the Tina Dashboard Sidebar](https://cdn.boxersteavee.dev/cdn-cgi/imagedelivery/8mDeb5dj0w69F4TILSzPUQ/ea7c4bea-e78c-45b5-5cb2-d3f33d393c00/public)

My website has had a few Major Upgrades, including implementing an easy-to-use Content Management System, switching to Cloudflare Pages, and implementing Cloudflare Images. Keep reading to learn more about these upgrades, and how they will assist me in posting more content to this site.

### Major Upgrade #1 - Tina CMS

It has always been difficult to make a new post on this website, as I had to open a code editor, like VSCode, and copy the template file, then modify it to add the content I wish.

![Screenshot of the Tina CMS "Create New Posts" Form. Including 6 fields, for the Title, Date Posted, Feature Image ID, Feature Image ID Alt Text, Description, Tags and Body.](https://cdn.boxersteavee.dev/cdn-cgi/imagedelivery/8mDeb5dj0w69F4TILSzPUQ/a651b93b-5fca-4ebe-2971-af313dfbec00/public)


This way, I can just have a very simple form to fill out, and then Tina Cloud takes that data, puts it in a markdown file, and commits that file to [My GitHub Repository](https://github.com/Boxersteavee/website). Cloudflare Pages (see more about that below) then notices a brand-new commit, and builds the source code. The built code is uploaded to their systems, and then made accessible to [the website you're already on](https://boxersteavee.dev)

### Major Upgrade #2 - Cloudflare Pages

This website was initially setup using CapRover, which is an easy-to-use app deployment/web-server manager for deploying docker containers... Well at least it's supposed to be easy-to-use. I still use it for my \[Curious Photos Website]\(https://curiousphotos.co.uk), but I had many issues when setting up Tina, including it not detecting environment variables, and it hardly ever getting software updates. Because of this, I decided to make the switch to Cloudflare Pages for this website.

Cloudflare Pages is a tool made by cloudflare, that can automatically builds static sites from their source code on github, and hosts it on their own web servers. That is what I'm now running my website on, as it's free and actually easy-to-use.

### Major Upgrade #3 - Cloudflare Images

Posting images on this website, or [Curious Photos](https://curiousphotos.co.uk) can be problematic sometimes, as I don't want to post the images to GitHub, as the source code of my website is open to everyone, but I don't wish the same to happen to my photos. To solve this, I (or my dad rather, Thanks dad!) purchased the $5/month Cloudflare Images package, which allows me to store 100,000 images, and up to 20 variants of those images. This allows me to securely store the images in cloudflare, and have a URL to the images that I can put on my websites, for example the feature images, or the image above. If you copy the image url, you'll notice it takes you to "cdn.boxersteavee.dev", but most crucially, has the path starting /cdn-cgi/imagedelivery/. This path indicates to cloudflare's DNS systems that it needs to go to their image service. The rest of the URL is my account hash and the image ID, as well as the variant name. These changes mean I can host all my images in cloudflare, and not have to worry about giving up copyright

### Have a look around!

Have a poke around, head to [the projects page](https://boxersteavee.dev/projects) to see more of my amazing projects, and checkout [My GitHub](https://github.com/Boxersteavee) to see my other work I'm working on and have done in the past.

### Update #1

Due to the great the way TinaCMS formats "raw markdown", I would still have to open a text editor and manually tweak the build in order for it to be added to the site. For this reason, I have decided to remove TinaCMS, and I am looking for alternatives. The other two upgrades mentioned in this post are still in use.