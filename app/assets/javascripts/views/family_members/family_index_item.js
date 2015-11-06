Genealogy.Views.FamilyIndexItem = Backbone.View.extend({

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  initialize: function (familyMember) {
    this.familyMember = familyMember;
  },

  render: function () {
    this.$el.html(this.template({ person: this.familyMember }));
    return this;
  },
});
