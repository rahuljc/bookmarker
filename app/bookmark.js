var Bookmark = {}

Bookmark.createBookmark = function (req, res, next) {
	var newBookmark = new BookmarkModel({
	  title: req.params.title,
	  link: req.params.link
	});

	newBookmark.save(function(err,bookmark){
		res.send(bookmark._id);
		console.log(bookmark.title + ' with _id '+ bookmark._id + ' created !');	
	});
   
   	return next();
}

Bookmark.updateBookmark = function (req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
}

Bookmark.deleteBookmark = function (req, res, next) {
   res.send('hello ' + req.params.name);
   return next();
}

Bookmark.getBookmark = function (req, res, next) {
   BookmarkModel.findOne({_id:req.params.id},function(err,bm){
   	res.send(bm);
   });
   return next();
}

module.exports = Bookmark;