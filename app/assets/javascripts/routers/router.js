Genealogy.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
    var header = new Genealogy.Views.Header();
    $('.header').append(header.render().$el);
  },

  routes: {
    "": "main",
    "main": "main",
    "family": "showFamily",
    "photos": "showPhotos",
    "documents": "showDocuments",
    "units/:unit": "showUnit"
  },

  main: function() {
    var user = Genealogy.currentUser = Genealogy.currentUser || new Genealogy.Models.CurrentUser();
    user.fetch({ parse: true });
    var view = new Genealogy.Views.UserMain({ model: user });
    this._swapView(view);
  },

  showFamily: function () {
    var family = (Genealogy.currentUser && Genealogy.currentUser.family()) ||
                    new Genealogy.Collections.FamilyMembers();
    family.fetch();
    var view = new Genealogy.Views.FamilyIndex({ collection: family });
    this._swapView(view);
  },

  showPhotos: function () {
    var photos = new Genealogy.Collections.Photos();
    photos.fetch();
    var view = new Genealogy.Views.PhotosIndex({ collection: photos });
    this._swapView(view);
  },

  showDocuments: function () {
    var documents = new Genealogy.Collections.Documents();
    documents.fetch();
    var view = new Genealogy.Views.DocumentsIndex({ collection: documents });
    this._swapView(view);
  },

  showUnit: function (unit) {
  },

  _swapView: function (view) {
    if (this._currentView) this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },
});
