Genealogy.Views.DocumentIndexItem = Genealogy.Views.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['documents/index_item'],
  tagName: 'li',
  className: 'document-member',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.DocumentFormView;
    this.initializeItem(options);
  },
}));
