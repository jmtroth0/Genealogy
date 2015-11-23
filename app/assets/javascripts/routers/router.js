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
    "submissions/:unit/:unit_id": "showUnit"
  },

  main: function() {
    var user = Genealogy.currentUser = Genealogy.currentUser || new Genealogy.Models.CurrentUser();
    user.fetch({
      parse: true,
      success: function () {
        var view;
        if (user.escape('type') === 'Student') {
          view = new Genealogy.Views.StudentMain({ model: user });
        } else if (user.escape('type') === 'Teacher') {
          view = new Genealogy.Views.TeacherMain({ model: user });
        } // add admin page
        this._swapView(view);
      }.bind(this)
    });
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

  showUnit: function (unit, unit_id) {
    var submissions = new Genealogy.Collections.Submissions(unit_id);
    submissions.fetch();
    var view = new Genealogy.Views.SubmissionsIndex({ collection: submissions });
    this._swapView(view);
  },

  _swapView: function (view) {
    if (this._currentView) this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.$el);
    this._currentView.render();
  },
});
