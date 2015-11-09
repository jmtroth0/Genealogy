Genealogy.Views.FamilyIndex = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['family_members/index'],
  className: 'family-main-index',

  events: {
    "click button#add-family-member": "openForm",
    "click button#make-family-tree": "makeFamilyTree",
  },

  initialize: function (options) {
    this.collection = this.model.family();

    this.formViewType = Genealogy.Views.PersonFormView;

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addFamilyMember);
    this.listenTo(this.collection, 'remove', this.removeFamilyMember);
  },

  render: function () {
    this.$el.html(this.template());
    this.placeFamilyMembers();
    return this;
  },

  placeFamilyMembers: function () {
    this.collection.forEach(function (familyMember) {
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

  // openForm: function () {
  //   if (this.$el.find('section.form-modal').length !== 0) { return; }
  //   this.formView = new Genealogy.Views.PersonFormView({
  //     familyMember: new Genealogy.Models.FamilyMember(),
  //     family: this.collection,
  //     closeCallback: this.closeForm.bind(this)
  //   });
  //   this.$el.append("<div class='form-space'>");
  //   this.addSubview('div.form-space', this.formView);
  // },
  //
  // closeForm: function () {
  //   this.removeSubview('div.form-space', this.formView);
  //   this.$el.find('div.form-space').remove();
  // }
}));
