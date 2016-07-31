var App = {
    Views: {},
    Controllers: {},
    init: function() {
        new App.Controllers.Bookmarks();
        Backbone.history.start();
    }
};

var Bookmark = Backbone.Model.extend({
    urlRoot: '/bookmark'
});



App.Controllers.Bookmarks = Backbone.Router.extend({
    routes: {
        "bookmark/:id":"edit",
        "":"index",
        "bookmark/create":"create"
    },
    
    edit: function(id) {
        var bm = new Bookmark({ id: id });
        bm.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: bm });
            },
            error: function() {
                new Error({ message: 'Could not find bookmarks.' });
                window.location.hash = '#';
            }
        });
    },
    
    index: function() {
        $.getJSON('http://localhost:3000/bookmark', function(data) {
            if(data) {
            	var bookmarks = _(data).map(function(i) { return new Bookmark(i); });
                new App.Views.Index({ bookmarks: bookmarks });
            } else {
                new Error({ message: "Error loading documents." });
            }
        });
    },
    
    create: function() {
        new App.Views.Edit({ model: new Bookmark() });
    }
});


App.Views.Index = Backbone.View.extend({

	initialize: function(options){
		this.bookmarks = options.bookmarks;
		this.render();
	},
	render: function(){
		output = "<ul>";
		_(this.bookmarks).each(function(data){
			output += "<li><a href='"+data.attributes.link + "'>"+ data.attributes.title+ "</a></li>";
		});
		output += "</ul>"
		$('div#app').html(output);
	}

});


App.Views.Edit = Backbone.View.extend({

	initialize: function(){
		console.log('initializing');
	},
	render: function(){
		return "<h1> Form </h1>"
	}

});


$(function() {
    App.init();
});
