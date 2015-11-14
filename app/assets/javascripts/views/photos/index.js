Genealogy.Views.PhotosIndex = Backbone.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'photos-main-index',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.indexItemView = Genealogy.Views.PhotoIndexItem;
    this.listenTo(this.collection, 'add', this.addModel);

    $(window).on('resize', this.adjustCollectionWidth.bind(this));
  },

  render: function () {
    Backbone.IndexView.prototype.render.call(this);
    var $collection = this.$el.find('ul.collection-index');
    if ($collection.find('img').length === this.collection.length) {
      $collection.imagesLoaded(function() {
        this.setMasonry();
      }.bind(this));
    }

    this.adjustCollectionWidth();

    return this;
  },

  setMasonry: function () {
    this.$el.find('ul.collection-index').masonry({
      columnWidth: 210,
      itemSelector: '.photo',
      animate: true,
      transitionDuration: '0.2s',
    });
  },

  adjustCollectionWidth: function (e) {
    var width = Math.ceil(window.innerWidth * 0.8 / 210) * 210;
    this.$el.find('ul.collection-index').css('width', width);
  },

  addModel: function (model) {
    var itemView = Backbone.IndexView.prototype.addModel.call(this, model);
    this.$el.find('ul.collection-index').imagesLoaded(function() {
      this.$el.find('ul.collection-index').masonry('appended', itemView.$el);
    }.bind(this));
  },

  removeModel: function (model, collection) {
    var selectorSubviews = this.subviews('ul.collection-index');
    var i = this.getIndexOfModelView(selectorSubviews, model);
    if (i === -1) { return; }

    this.$el.find('ul.collection-index')
      .masonry('remove', selectorSubviews.toArray()[i].el)
      .masonry('layout');

    setTimeout(function () {
      Backbone.IndexView.prototype.removeModel.call(this, model, collection);
    }.bind(this), 0);
  }
}));
