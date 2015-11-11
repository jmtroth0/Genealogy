Genealogy.Views.PhotoIndexItem = Backbone.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/index_item'],
  tagName: 'li',
  className: 'photo',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.initializeItem(options);
  },
}));
