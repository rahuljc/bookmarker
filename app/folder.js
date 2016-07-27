var Folder = {}

Folder.createFolder = function(req,res,next){
	res.send('Create Folder');
	return next();
}

Folder.deleteFolder = function(req,res,next){
	res.send('Delete Folder');
	return next();
}

Folder.listFolder = function(req,res,next){
	res.send('List Folder');

	return next();
}

module.exports = Folder;