Genealogy.Views.FamilyIndex = Backbone.CompositeView.extend({

  template: JST['family_members/index'],
  formTemplate: JST['family_members/form'],

  events: {
    "click button#add-family-member": "openForm",
    "submit form.family-member-form": "submitForm",
  },

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render);
    this.listenTo(this.user.family(), 'add', this.addFamilyMember);
  },

  render: function () {
    this.$el.html(this.template());
    this.user.family().forEach(function (familyMember) {
      this.addFamilyMember(familyMember);
    }.bind(this));
    return this;
  },

  addFamilyMember: function (familyMember) {
    var familyMemberView = new Genealogy.Views.FamilyIndexItem(familyMember);
    this.$el.find('ul.family-members').append(familyMemberView.render().$el);
  },

  removeFamilyMember: function (e) {

  },

  openForm: function () {
    var $template = this.makeModal({content: this.formTemplate()});
    this.$el.find('section.form-modal').remove();
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
