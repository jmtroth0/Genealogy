Genealogy.Views.UnitIndexItem = Genealogy.Views.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['units/index_item'],
  tagName: 'li',
  className: 'unit',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.UnitFormView;
    this.initializeItem(options);
  },
}));
