Genealogy.Views.FamilyIndex = Backbone.CompositeView.extend({

  template: JST['family_members/index'],
  formTemplate: JST['family_members/form'],
  className: 'family-main-index',

  events: {
    "click button#add-family-member": "openForm",
    "submit form.family-member-form": "submitForm",
    "click button#make-family-tree": "makeFamilyTree",
  },

  initialize: function (options) {
    this.user = options.user;
    this.family = this.user.family();
    this.listenTo(this.user, 'sync', this.render);
    this.listenTo(this.family, 'add', this.addFamilyMember);
    this.listenTo(this.family, 'remove', this.removeFamilyMember);
  },

  render: function () {
    this.$el.html(this.template());
    this.placeFamilyMembers();
    return this;
  },

  placeFamilyMembers: function () {
    this.family.forEach(function (familyMember) {
      this.addFamilyMember(familyMember);
    }.bind(this));
  },

  addFamilyMember: function (familyMember) {
    var familyMemberView = new Genealogy.Views.FamilyIndexItem({
      model: familyMember
    });
    this.addSubview('ul.family-members', familyMemberView);
  },

  removeFamilyMember: function (familyMember, family) {
    this.removeModelSubview('ul.family-members', familyMember);
  },

  makeFamilyTree: function () {
    console.log("Not yet implemented");
  },

  openForm: function () {
    if (this.$el.find('section.form-modal').length !== 0) { return; }
    var formView = new Genealogy.Views.PersonFormView({
      familyMember: new Genealogy.Models.FamilyMember(),
      family: this.family
    });
    this.addSubview('div.placeholder', formView);
  },


});
