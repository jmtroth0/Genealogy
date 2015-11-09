Genealogy.Views.PhotosIndex = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/index'],
  formViewType: Genealogy.Views.PhotoFormView,

  events: {
    "click button.upload-photo": "openForm",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPhoto);
    this.listenTo(this.collection, 'remove', this.removePhoto);
  },

  render: function () {
    this.$el.html(this.template());
    this.placePhotos();
    // $('.photos').masonry({
    //   columnWidth: 200,
    //   itemSelector: '.photo'
    // });
    return this;
  },

  placePhotos: function () {
    this.collection.forEach(function (photo) {
      this.addPhoto(photo);
    }.bind(this));
  },

  addPhoto: function (photo) {
    var photoView = new Genealogy.Views.PhotoIndexItem({
      model: photo
    });
    this.addSubview('ul.photos', photoView);
  },

  removePhoto: function (photo, family) {
    this.removeModelSubview('ul.family-members', photo);
  },
}));
