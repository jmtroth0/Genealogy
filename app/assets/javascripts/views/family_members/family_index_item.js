Genealogy.Views.FamilyIndexItem = Backbone.View.extend({

  template: JST['family_members/index_item'],
  tagName: 'li',
  className: 'family-member',

  events: {
    "click button.delete": "deleteFamilyMember",
    "click button.edit": "editFamilyMember",
    "submit form.family-member-form": "submitForm",
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
    var $template = this.makeModal({
      content: JST['family_members/form']({
        familyMember: this.familyMember
      })
    });
    this.$el.append($template);
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }

    var attrs = $(e.target).serializeJSON().family_member;

    var $button = $(e.target).find('button');
    $button.html('Pending');
    this.formPending = true;

    this.familyMember.save(attrs, {
      success: function () {
        this.removeModal();
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        $button.html('Submit Edit');
        this.formPending = false;
      }.bind(this)
    });
  },
});
