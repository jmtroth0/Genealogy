Genealogy.Views.PersonFormView = Backbone.FormView.extend({
  template: JST['family_members/form'],

  initialize: function (options) {
    this.initializeForm(options);
  },

  render: function () {
    this.renderForm();
    this.addParentOptions();
    return this;
  },

  addParentOptions: function () {
    this.collection.each(function(person){
      var $option = $('<option>');
      $option.val(person.id);
      $option.html(person.name());
      var selector = 'select.select-parent';
      if (person.id === this.model.get('parent_a_id')) {
        this.$el.find(selector + '.parentB').append($option.clone());
        $option.prop('selected', true);
        selector += '.parentA';
      } else if (person.id === this.model.get('parent_b_id')) {
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
    var status = this.model.isNew() ? "new" : "edit";
    if (status === "new") { this.collection.add(this.model); }

    var $button = $(e.target).find('button');
    $button.html('Pending');
    this.formPending = true;

    this.model.save(attrs, {
      success: function () {
        this.closeForm();
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        var buttonText = "";
        if (status === "new") {
          this.collection.remove(model);
          buttonText = 'Add to Family';
        } else {
          buttonText = 'Submit Edit';
        }
        $button.html(buttonText);
        this.formPending = false;
      }.bind(this)
    });
  },
});
