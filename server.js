const http = require("http");
const notifier = require("node-notifier");
const servidor = require("./lib");
const better = require('./better');


servidor
  .createServer(function(request, response) {
    request.write();
    response.write("Response test");
  })
  .exec("dir", function(error, msg) {
    if (error) {
      return console.log("Ha ocurrido un error: " + msg);
    }

    console.log(msg);
  })
  .listen(8080);

let [error, msg] = better.init();

better.exec(function (error, message) {
  if (error) {
    return console.log(message);
  }

  return console.log("Todo ok");
});


if (error) {
  console.log(msg);
}

http.createServer(function (req, res) {
    res.statusCode(200).json({ message: "Este es un mensaje del servidor "});
    res.end();
}).listen(8000);


http
  .createServer(function(request, response) {
    console.log("Iniciando respuesta desde el servidor");
    console.log(request);
    response.writeHead(401, {
      "Content-type": "text/html",
      // "Content-Disposition": 'attachment; filename="download.zip"'
      "WWW-Authenticate": 'Basic realm="Restricted Area HTTP/1.0 401 Unauthorized'
    });

    response.write("Hello, from nodejs");
    response.end();
  })
  .listen(8080);
