Genealogy.Views.FamilyIndexItem = Backbone.CompositeView.extend({

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  events: {
    "click button.delete": "deleteFamilyMember",
    "click button.edit": "editFamilyMember",
  },

  initialize: function (options) {
    this.familyMember = options.model;
    this.listenTo(this.familyMember, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ person: this.familyMember }));
    return this;
  },

  deleteFamilyMember: function (e) {
    this.familyMember.destroy();
    this.$el.remove(); // add a warning modal once there is more info to them
  },

  editFamilyMember: function (e) {
    if (this.$el.find('section.form-modal').length !== 0) { return; }
    this.editModal = new Genealogy.Views.PersonFormView({
      familyMember: this.familyMember,
      closeCallback: this.closeForm.bind(this)
    });
    this.addSubview('div.placeholder', this.editModal);
  },

  closeForm: function (e) {
    this.removeSubview('div.placeholder', this.editModal);
  },

});
