var http = require('http');

http.createServer((req, res) => { //refactor/notación de flecha
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

//Cuando se introduce el comando node app.js en la terminal, esta parece como si no estuviera haciendo nada debido a que el servidor solo está "escuchando" y como no recibe algo que "escuchar" simplemente se queda en ese estado.

//Cuando en el navegador se introduce "localhost:1337", si se tiene habilitado el servidor para "escuchar", aparecerá el texto "hello world!".

//En la sección headers aparece lo que se puse en la función de http, además de la URL, el estado (OK), la conexión, el contenido del texto, la fecha entre otras cosas.