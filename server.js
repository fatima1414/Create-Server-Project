const http = require("http");
const port = 5000;
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const homePath = path.join(__dirname, "/src/index.html");
      fs.readFile(homePath, (err, content) => {
        res.end(content);
      });
      break;

    case "/about":
      const aboutPath = path.join(__dirname, "/src/about.html");
      fs.readFile(aboutPath, (err, content) => {
        res.end(content);
      });
      break;

    case "/blog":
      const blogPath = path.join(__dirname, "/src/blog-page.html");
      fs.readFile(blogPath, (err, content) => {
        res.end(content);
      });
      break;

    case "/blog-single":
      const blogSinglePath = path.join(__dirname, "/src/blog-single.html");
      fs.readFile(blogSinglePath, (err, content) => {
        res.end(content);
      });
      break;

    case "/blog-page":
      const blogPagePath = path.join(__dirname, "/src/blog-page.html");
      fs.readFile(blogPagePath, (err, content) => {
        res.end(content);
      });
      break;

    case "/contact":
      const contactPath = path.join(__dirname, "/src/contact.html");
      fs.readFile(contactPath, (err, content) => {
        res.end(content);
      });
      break;

    default:
      res.end("<h1>Page not found</h1>");
  }
});

server.listen(port, () =>
  console.log(`server listen on port number🤞 http://localhost:${port}`)
);
