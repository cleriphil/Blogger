Blogger.PostsController = Ember.ArrayController.extend({
  actions: {
    sortByTitle: function() {
      this.set('sortProperties', ['title']);
    },
    sortByImportance: function() {
      this.set('sortProperties', ['importance']);
    }
  }
});
