/**Load required modules*/
var http = require("http");
var restify = require('restify')
var mongoose = require('mongoose');

/**Basic configs*/
var port = 3000;
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

mongoose.connect('mongodb://localhost/bookmarker');
var Schema = mongoose.Schema

var bookmarkSchema = new Schema({
	title: String,
	link: String,
});

var Bookmark = mongoose.model('Bookmark',bookmarkSchema);



/*******************Routes*************************/


var createBookmark = function (req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
}

var updateBookmark = function (req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
}

var deleteBookmark = function (req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
}

var getBookmark = function (req, res, next) {
   Bookmark.findOne({_id:req.params.id},function(err,bm){
   	res.send(bm);
   });
   
   //return next();
}
/**Bookmarks*/
server.post("/bookmark/create", createBookmark)
server.put("/bookmark/:id", updateBookmark)
server.del("/bookmark/:id", deleteBookmark)
server.get("/bookmark/:id", getBookmark)


/**Folders*/
// server.post("/folder/create", controllers.bookmark.createFolder)
// server.del("/folder/:id", controllers.bookmark.deleteFolder)
// server.get("/folder/:id", controllers.bookmark.getBookmark)


console.log("Listening at ");
server.listen(port);