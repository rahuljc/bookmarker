/**Load required modules*/
var http = require("http");
var restify = require('restify')
var mongoose = require('mongoose');

var bookmarker = require('./app/bookmark.js');
var folder = require('./app/folder.js')
console.log(bookmarker);

/**Basic configs*/
var port = 3000;
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

mongoose.connect('mongodb://localhost/bookmarker');
var Schema = mongoose.Schema;

var bookmarkSchema = new Schema({
	title: String,
	link: String,
});

var folderSchema = new Schema({
	title: String,
});


module.exports = BookmarkModel = mongoose.model('Bookmark',bookmarkSchema);
module.exports = folderModel = mongoose.model('Folder',folderSchema);


/*******************Routes*************************/

/**Bookmarks*/
server.post("/bookmark/create", bookmarker.createBookmark);
server.put("/bookmark/:id", bookmarker.updateBookmark);
server.del("/bookmark/:id", bookmarker.deleteBookmark);
server.get("/bookmark/:id", bookmarker.getBookmark);

/**Folders*/
server.post("/folder/create", folder.createFolder)
server.del("/folder/:id", folder.deleteFolder)
server.get("/folder/list", folder.listFolder)


console.log("Listening at ");
server.listen(port);