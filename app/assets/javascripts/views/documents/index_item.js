Genealogy.Views.DocumentIndexItem = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, Genealogy.Mixins.IndexItem, {

  template: JST['documents/index_item'],
  tagName: 'li',
  className: 'document-member',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.DocumentFormView;
    this.initializeItem(options);
  },
}));
