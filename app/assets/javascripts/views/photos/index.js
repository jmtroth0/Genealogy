Genealogy.Views.PhotosIndex = Backbone.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'photos-main-index',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.indexItemView = Genealogy.Views.PhotoIndexItem;
    Backbone.IndexView.prototype.initialize.call(this);
  },
}));
