var http = require('http');
var fs = require('fs');
var url = require('url');

function templeteHtml(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${body}
  </body>
  </html>
  `;
}

function templeteList(fileList) {
  var list = `<ul>`;
  for (var i = 0; i < fileList.length; i++) {
    list += `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
  }
  list += '</ul>';
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
      if (queryDate.id === undefined) {
         fs.readdir('data',function (error, fileList) {
           var title = 'Welcome!';
           var description = 'Hello, Node.JS!';
        /*  var list = '
           <ul>
             <li><a href="/?id=HTML">HTML</a></li>
             <li><a href="/?id=CSS">CSS</a></li>
             <li><a href="/?id=JavaScript">JavaScript</a></li>
           </ul>';
        */
           var list = templeteList(fileList);
           var templete = templeteHtml(title, list, `<h2>${title}</h2>${description}`);
           response.writeHead(200);
           response.end(templete);
         })
      } else {
        fs.readdir('data',function (error, fileList) {
          var title = 'Welcome!';
          var description = 'Hello, Node.JS!';
        fs.readFile(`data/${queryDate.id}`,'utf8',function (err, description) {
          var list = templeteList(fileList);
          var title = queryDate.id;
          var templete = templeteHtml(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(templete);
        });
       });
      }
    } else {
      response.writeHead(404);
      response.end('Not Found');
    }
});
app.listen(3000);
