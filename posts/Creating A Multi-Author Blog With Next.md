---
title: "Creating A Multi-Author Blog With Next.js"
excerpt: "This article explains how we can connect different types of content in a Next.js application. With this technique, "
createdAt: "2021-06-03"
category: "Javascript"
---

We are going to keep all information in files on the local filesystem. The two types of content, posts and authors, will use different types of files. The text-heavy posts will use Markdown, allowing for an easier editing process. Because the information on authors is lighter, we will keep that in JSON files. Helper functions will make reading different file types and combining their content easier.

Next.js lets us read data from different sources and of different types effortlessly. Thanks to its dynamic routing and next/link, we can quickly build and navigate to our site’s various pages. We also get image optimization for free with the next/image package.

By picking the “batteries included” Next.js, we can focus on our application itself. We don’t have to spend any time on the repetitive groundwork new projects often come with. Instead of building everything by hand, we can rely on the tested and proven framework. The large and active community behind Next.js makes it easy to get help if we run into issues along the way.

After reading this article, you will be able to add many kinds of content to a single Next.js project. You will also be able to create relationships between them. That allows you to link things like authors and posts, courses and lessons, or actors and movies.

This article assumes basic familiarity with Next.js. If you have not used it before, you might want to read up on how it handles pages and fetches data for them first.

We won’t cover styling in this article and focus on making it all work instead. You can get the result on GitHub. There is also a stylesheet you can drop into your project if you want to follow along with this article. To get the same frame, including the navigation, replace your pages/\_app.js with this file.
