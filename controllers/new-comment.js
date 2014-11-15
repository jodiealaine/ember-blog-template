Blogger.NewCommentController = Ember.Controller.extend({
  needs: ['post'],
  actions: {
  	save: function() {
  		var comment = this.store.createRecord('comment', {
  			text: this.get('text')
  		});
  		comment.save();
  		var post = this.get('controllers.post.model');
  		post.get('comments').pushObject(comment);
  		post.save();

  		this.transitionToRoute('post', post.id);
  	}
  }
});