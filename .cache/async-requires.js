// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-posts-post-page-js": require("gatsby-module-loader?name=component---src-posts-post-page-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/posts/PostPage.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/404.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/layout-index.json"),
  "posts-post.json": require("gatsby-module-loader?name=path---posts-post!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/posts-post.json"),
  "posts-second-post.json": require("gatsby-module-loader?name=path---posts-second-post!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/posts-second-post.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/404.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/layouts/index.js")
}