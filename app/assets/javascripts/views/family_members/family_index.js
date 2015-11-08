Genealogy.Views.FamilyIndex = Backbone.CompositeView.extend({

  template: JST['family_members/index'],
  formTemplate: JST['family_members/form'],

  events: {
    "click button#add-family-member": "openForm",
    "submit form.family-member-form": "submitForm",
    "click button#make-family-tree": "makeFamilyTree",
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render);
    this.listenTo(this.user.family(), 'add', this.addFamilyMember);
    this.listenTo(this.user.family(), 'remove', this.removeFamilyMember);
  },

  render: function () {
    this.$el.html(this.template());
    this.placeFamilyMembers();
    return this;
  },

  placeFamilyMembers: function () {
    this.user.family().forEach(function (familyMember) {
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
    var $template = this.makeModal({
      content: this.formTemplate({
        familyMember: new Genealogy.Models.FamilyMember()
      })
    });
    this.$el.append($template);
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }

    var attrs = $(e.target).serializeJSON().family_member;
    var person = new Genealogy.Models.FamilyMember(attrs);

    var family = this.user.family();
    family.add(person);

    var $button = $(e.target).find('button');
    $button.html('Pending');
    this.formPending = true;

    person.save({}, {
      success: function () {
        $button.html('Add to Family');
        this.$el.find('input[type=text]').val("");
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        $button.html('Add to Family');
        family.remove(model);
        this.formPending = false;
      }.bind(this)
    });
  },


});
