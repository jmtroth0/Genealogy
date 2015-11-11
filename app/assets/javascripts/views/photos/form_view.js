Genealogy.Views.PhotoFormView = Backbone.FormView.extend({

  template: JST['photos/form'],

  events: {
    "change #input-photo-image": "fileInputChange"
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

    var attrs = $(e.target).serializeJSON();
    var file = this.$('#input-photo-image')[0].files[0];

    var formData = new FormData();
    for(var attr in attrs) {
      formData.append("photo[" + attr + "]", attrs[attr]);
    }
    formData.append("photo[image]", file);

    this.formPending = true;
    this.model.saveFormData(formData, {
      success: function (model) {
        this.collection.add(model);
        this.formPending = false;
        this.closeForm();
      }.bind(this),
      error: function (model, response) {
        $('.form-errors').empty();
        response.responseJSON.forEach(function (el) {
          var $li = $('<li>');
          $li.text(el);
          $('.form-errors').append($li);
        });
        this.formPending = false;
      },
    });
  },

  fileInputChange: function(e) {
    var self = this;
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      self._updatePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that._updatePreview("");
    }
  },

  _updatePreview: function (src) {
    this.$el.find("#preview-post-image").attr("src", src);
  }
});
