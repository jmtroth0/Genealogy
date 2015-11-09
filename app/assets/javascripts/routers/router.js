Genealogy.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "main",
    "main": "main",
    "family": "showFamily",
    "photos": "showPhotos",
  },

  main: function() {
    var user = Genealogy.currentUser = Genealogy.currentUser || new Genealogy.Models.CurrentUser();
    user.fetch();
    var view = new Genealogy.Views.UserMain({model: user});
    this._swapView(view);
  },

  showFamily: function () {
    var user = Genealogy.currentUser = Genealogy.currentUser || new Genealogy.Models.CurrentUser();
    user.fetch();
    var view = new Genealogy.Views.FamilyIndex({ model: user });
    this._swapView(view);
  },

  showPhotos: function () {
    var user = Genealogy.currentUser = Genealogy.currentUser || new Genealogy.Models.CurrentUser();
    var photos = new Genealogy.Collections.Photos();
    user.fetch();
    photos.fetch();
    var view = new Genealogy.Views.PhotosIndex({ collection: photos });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  }
});
