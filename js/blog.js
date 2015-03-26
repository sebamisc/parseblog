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
	        console.log(blogs);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});

});