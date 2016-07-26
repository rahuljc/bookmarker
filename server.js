/**Load required modules*/
var http = require("http");
var restify = require('restify')

/**Basic configs*/
var port = 3000;

var server = restify.createServer();
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

/**Routes*/

/**Bookmarks*/
server.post("/bookmark/create", controllers.bookmark.createBookmark)
server.put("/bookmark/:id", controllers.bookmark.updateBookmark)
server.del("/bookmark/:id", controllers.bookmark.deleteBookmark)
server.get("/bookmark/:id", controllers.bookmark.getBookmark)


/**Folders*/
server.post("/folder/create", controllers.bookmark.createFolder)
server.del("/folder/:id", controllers.bookmark.deleteFolder)
server.get("/folder/:id", controllers.bookmark.getBookmark)


console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);