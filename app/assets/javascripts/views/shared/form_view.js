Genealogy.Views.FormView = Backbone.View.extend({
  initialize: function (options){
    this.closeForm = options.closeCallback;
    this.addEvents({
      'click button.close-form': 'closeForm',
      "submit form": "submitForm"
    });
    this.status = options.status || (this.model.isNew() ? 'create' : 'edit');
  },

  render: function () {
    var $template = this.makeFormModal({
      content: this.template({
        model: this.model,
        status: this.status
      })
    });
    this.$el.append($template);
    return this;
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }
    this.formPending = true;

    var attrs = this.getAttrs(e)[this.collection.type];
    if (this.status === "create") { this.collection.add(this.model); }

    var $button = $(e.target).find('button.submit');
    $button.html('Pending');

    this.model.save(attrs, {
      success: function () {
        this.closeForm();
        this.formPending = false;
      }.bind(this),
      error: function (model, response) {
        var buttonText;
        if (this.status === "new") {
          this.collection.remove(model);
          buttonText = "Create";
        } else {
          buttonText = 'Submit Edit';
        }
        $button.html(buttonText);
        var $errors = $('<p class="errors">' + response.responseText + '</p>');
        this.$el.find('article.form-content').prepend($errors);
        this.formPending = false;
      }.bind(this)
    });
  },

  getAttrs: function(e) {
    return $(e.target).serializeJSON();
  },
});
