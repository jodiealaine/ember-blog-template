Blogger.NewPostController = Ember.Controller.extend({
	actions: {
		save: function() {
			var newPost = this.store.createRecord('post', {
				title: this.get('title'),
				body: this.get('body')
			});

			newPost.save();
			this.transitionToRoute('posts');
		}
	} 
});