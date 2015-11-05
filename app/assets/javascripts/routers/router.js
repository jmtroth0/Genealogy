Genealogy.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "userMain",
    "main": "userMain",
  },

  userMain: function() {
    var user = Genealogy.currentUser = new Genealogy.Models.CurrentUser();
    user.fetch();
    var view = new Genealogy.Views.UserMain({user: user});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  }
});
