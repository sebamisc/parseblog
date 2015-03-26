$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("FWBUIa3MVRxeEgnfRyYFZdKHJpRsjX6itOYt7WwJ", "wyB3Wln1vAsiab19q7HrGUboPfvSlplU22LNZlRK");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});