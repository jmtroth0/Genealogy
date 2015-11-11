Genealogy.Views.FamilyIndexItem = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, Genealogy.Mixins.IndexItem, {

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PersonFormView;
    this.initializeItem(options);
  },
}));
