// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-posts-post-page-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/posts/PostPage.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/layout-index.json"),
  "posts-post.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/posts-post.json"),
  "posts-second-post.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/posts-second-post.json"),
  "dev-404-page.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/404.json"),
  "about.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/about.json"),
  "index.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/index.json"),
  "404-html.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/404-html.json"),
  "posts-first-post-form-netlify-cms.json": require("/Users/michaelcastor/projects/dreaming-of-thailand-blog/.cache/json/posts-first-post-form-netlify-cms.json")
}