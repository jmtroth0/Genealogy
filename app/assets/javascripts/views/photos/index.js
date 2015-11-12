Genealogy.Views.PhotosIndex = Backbone.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'photos-main-index',

  initialize: function (options) {
    Backbone.IndexView.prototype.initialize.call(this);
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.indexItemView = Genealogy.Views.PhotoIndexItem;
  },

  render: function () {
    Backbone.IndexView.prototype.render.call(this);
    this.$el.find('ul.collection-index').addClass('group');
    // $('ul.collection-index').masonry({
    //   columnWidth: 200,
    //   itemSelector: 'li.photo',
    //   gutter: 10,
    // });
    return this;
  }
}));
