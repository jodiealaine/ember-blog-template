Blogger.Router.map(function(){
	this.resource('posts', {path: '/'});
	this.resource('about');
	this.resource('contact', function() {
		this.resource('phone');
		this.resource('email');
	});
	this.resource('comments');
	this.resource('post', {path: 'posts/:post_id'});
});