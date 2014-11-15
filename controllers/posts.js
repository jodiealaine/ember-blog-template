Blogger.PostsController = Ember.ArrayController.extend({
	sortByTitle: ['title'],
	actions: {
		sortByTitle: function() {
			this.set('sortProperties', ['title']);
		}
	}
});