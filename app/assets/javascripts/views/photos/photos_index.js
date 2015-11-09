Genealogy.Views.PhotosIndex = Backbone.View.extend({

  template: JST['photos/index'],
  formTemplate: JST['photos/form'],

  events: {
    "click button.upload-photo": "openForm",
    "submit form": "submit",
    "change #input-photo-image": "fileInputChange"
  },

  initialize: function () {
    this.listenTo(this.collection, 'add sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photos: this.collection }));
    return this;
  },

  openForm: function () {
    if (this.$el.find('section.form-modal').length !== 0) { return; }
    this.formPhoto = new Genealogy.Models.Photo();
    var $template = this.makeModal({
      content: this.formTemplate({
        photo: this.formPhoto
      })
    });
    this.$el.append($template);
    this.$el.on('click', 'button.close-form', this.closeForm.bind(this));
    return this;
  },

  closeForm: function (e) {
    this.$el.find('section.form-modal').remove();
  },

  submit: function (e) {
    e.preventDefault();

    var attrs = $(e.target).serializeJSON();
    var file = this.$('#input-photo-image')[0].files[0];

    var formData = new FormData();
    for(var attr in attrs) {
      formData.append("photo[" + attr + "]", attrs[attr]);
    }
    formData.append("photo[image]", file);

    this.formPhoto.saveFormData(formData, {
      success: function (model) {
        this.collection.add(model);
        this.closeForm();
      }.bind(this),
      error: function (model, response) {
        this.collection.remove(model);
        $('.form-errors').empty();
        response.responseJSON.forEach(function (el) {
          var $li = $('<li>');
          $li.text(el);
          $('.form-errors').append($li);
        });
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
