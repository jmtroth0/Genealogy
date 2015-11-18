Genealogy.Views.FamilyIndexItem = Genealogy.Views.IndexItem.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  initialize: function (options) {
    this.formViewType = Genealogy.Views.PersonFormView;
    this.initializeItem(options);
  },
}));
