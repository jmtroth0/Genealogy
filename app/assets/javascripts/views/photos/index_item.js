Genealogy.Views.PhotoIndexItem = Backbone.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/index_item'],
  tagName: 'li',
  className: 'photo group',

  events: {
    "click div.image-container": "openPhotoModal",
  },

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.initializeItem(options);
  },

  openPhotoModal: function (e) {
    if (this.$el.find('section.modal').length !== 0) { return; }
    var photoShow = new Genealogy.Views.ShowPhoto({
      model: this.model
    });
    $('#backdrop').prepend(photoShow.render().$el);
  },
}));
