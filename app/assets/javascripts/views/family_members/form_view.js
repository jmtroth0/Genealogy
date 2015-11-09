Genealogy.Views.PersonFormView = Backbone.View.extend({
  template: JST['family_members/form'],

  events: {
    'click button.close-form': 'closeForm',
    "submit form.family-member-form": "submitForm",
  },

  initialize: function (options){
    this.familyMember = options.familyMember;
    this.family = options.family || this.familyMember.collection;
    this.closeForm = options.closeCallback;
  },

  render: function () {
    this.openForm();
    return this;
  },

  openForm: function () {
    var $template = this.makeModal({
      content: this.template({
        familyMember: this.familyMember
      })
    });
    this.$el.append($template);
    this.addParentOptions();
    return this;
  },

  addParentOptions: function () {
    this.family.each(function(person){
      var $option = $('<option>');
      $option.val(person.id);
      $option.html(person.name());
      var selector = 'select.select-parent';
      if (person.id === this.familyMember.get('parent_a_id')) {
        this.$el.find(selector + '.parentB').append($option.clone());
        $option.prop('selected', true);
        selector += '.parentA';
      } else if (person.id === this.familyMember.get('parent_b_id')) {
        this.$el.find(selector + '.parentA').append($option.clone());
        $option.prop('selected', true);
        selector += '.parentB';
      }
      this.$el.find(selector).append($option);
    }.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }

    var attrs = $(e.target).serializeJSON().family_member;
    var status = this.familyMember.isNew() ? "new" : "edit";
    if (status === "new") { this.family.add(person); }

    var $button = $(e.target).find('button');
    $button.html('Pending');
    this.formPending = true;

    this.familyMember.save(attrs, {
      success: function () {
        this.closeForm();
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        var buttonText = "";
        if (status === "new") {
          family.remove(model);
          buttonText = 'Add to Family';
        } else {
          buttonText = 'Submit Edit';
        }
        $button.html(buttonText);
        this.formPending = false;
      }.bind(this)
    });
  },

  removeModal: function (e) {
    e.preventDefault();
    this.$el.remove();
  },
});
