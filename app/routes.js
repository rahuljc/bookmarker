/*******************Routes*************************/

/**Bookmarks*/
server.post("/bookmark/create", bookmarker.createBookmark);
server.put("/bookmark/:id", bookmarker.updateBookmark);
server.del("/bookmark/:id", bookmarker.deleteBookmark);
server.get("/bookmark/:id", bookmarker.getBookmark);

/**Folders*/
// server.post("/folder/create", controllers.bookmark.createFolder)
// server.del("/folder/:id", controllers.bookmark.deleteFolder)
// server.get("/folder/:id", controllers.bookmark.getBookmark)