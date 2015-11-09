Genealogy.Views.PhotoIndexItem = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, Genealogy.Mixins.IndexItem, {

  template: JST['photos/index_item'],
  tagName: 'li',
  className: 'photo',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PhotoFormView;
    this.initializeForm();
  },
}));
