Genealogy.Views.DocumentFormView = Backbone.FormView.extend({

  template: JST['documents/form'],

  events: {
    "change #input-document-image": "fileInputChange"
  },

  initialize: function (options) {
    this.initializeForm(options);
  },

  render: function () {
    this.renderForm();
    return this;
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }

    var formData = new FormData();

    var attrs = $(e.target).serializeJSON();
    if (this.status === "create") {
      var file = this.$('#input-document-file')[0].files[0];
      formData.append("document[file]", file);
    }

    for(var attr in attrs) {
      formData.append("document[" + attr + "]", attrs[attr]);
    }
    var $button = $('button.submit').html("Pending");
    this.formPending = true;
    this.model.saveFormData(formData, {
      success: function (model) {
        if (this.status === "create") {
          this.collection.add(model);
        } else {
          model.trigger("sync");
        }
        this.formPending = false;
        this.closeForm();
      }.bind(this),
      error: function (model, response) {
        var $errors = $('p.errors');
        $errors.html(response.responseText);
        if (this.status === "create") {
          $button.html("Upload");
        } else {
          $button.html("Update");
        }
        this.formPending = false;
      }.bind(this),
    });
  },
});
