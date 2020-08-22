const fs = require('fs'),
    http = require('http'),
    port = 7077;

const server = http.createServer(function server(request, response) {
     // SPLIT THE URL IN ORDER TO EXAMINE IT BETTER
  const splitURL = request.url.split('/'),
    fileType   = splitURL[1] // Set of characters after the first /
    file       = splitURL[2];

    switch (fileType) {
        case "stylesheets":
            serveCSS(file,response)
            break;
        case "images":
            serveJPG(file,response)
            break;
        default:
            // serve HTML file
            switch(fileType){

                case "cars":
                    if (file === "new"){
                        serveHTML("new_car.html", response);
                    } else {
                        serveHTML("cars.html", response)
                    }
                    break;
                case "cats":
                    serveHTML("cats.html",response);
                    break;
                default:
                    serve404(response)
            }
    }
});


function serveHTML(filename, response){
    fs.readFile(`views/${filename}`, 'utf8', function(errors, content){
        if (errors) {return serve404(response)}
        response.writeHead(200,{'Content-Type': 'text/html'});
        response.write(content);
        response.end();
    });
}

function serveCSS(filename, response){
    fs.readFile(`stylesheets/${filename}`, 'utf8', function (errors, content){
        if (errors) {return serve404(response)}
        response.writeHead(200,{'Content-Type': 'text/css'})
        response.write(content);
        response.end();
    })
}

function serveJPG(filename, response){
    fs.readFile(`images/${filename}`, function(errors, content){
        if (errors) {return serve404(response)}
        response.writeHead(200, {'Content-Type': 'image/jpg'})
        response.write(content);
        response.end()
    })
}

function serve404(response){
    response.writeHead(400);
    response.end('File not found!')
}

server.listen(port, function () {
    console.log(`Running on port: ${port}`);
});