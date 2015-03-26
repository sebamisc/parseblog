$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("FWBUIa3MVRxeEgnfRyYFZdKHJpRsjX6itOYt7WwJ", "wyB3Wln1vAsiab19q7HrGUboPfvSlplU22LNZlRK");
 

    var Blog = Parse.Object.extend("Blog");
	var Blogs = Parse.Collection.extend({
	    model: Blog
	});

	var blogs = new Blogs();

	blogs.fetch({
	    success: function(blogs) {
		    var blogsView = new BlogsView({ collection: blogs });
		    blogsView.render();
		    $('.main-container').html(blogsView.el);
		},
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});
	var BlogsView =  Parse.View.extend({
	    template: Handlebars.compile($('#blogs-tpl').html()),
	    render: function(){ 
	        var collection = { blog: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});

});