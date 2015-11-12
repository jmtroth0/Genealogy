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
    var $collection = this.$el.find('ul.collection-index');
    if ($collection.find('img').length !== 0) { this.setMasonry($collection); }

    return this;
  },

  setMasonry: function ($collection) {
    $collection.imagesLoaded( function() {
      $collection.masonry({
        columnWidth: 210,
        itemSelector: '.photo',
        animate: true,
        transitionDuration: '0.2s',
      });
    });
  }
}));
