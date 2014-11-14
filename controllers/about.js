Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
  	showRealName: function(){
  		alert("This blog is about 'about blog'.");
  	},
  	showPicture: function(){
  		this.set("isPictureShowing", true);
  	},
  	hidePicture: function() {
  		this.set("isPictureShowing", false);
  	}
  }
});