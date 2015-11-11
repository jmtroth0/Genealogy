Backbone.PaperclipFormView = Backbone.FormView.extend({
  initialize: function (options) {
    Backbone.FormView.prototype.initialize.call(this, options);
    this.inputBlockName = '#input-' + this.model.type + "-" + this.model.attachmentType;
    var events = {};
    events["change " + this.inputBlockName] = "fileInputChange";
    this.addEvents(events);
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.formPending) { return; }

    var formData = new FormData();
    var attrs = this.getAttrs(e);
    for(var attr in attrs) {
      formData.append(this.makeAttrWrapper(attr), attrs[attr]);
    }

    if (this.status === "create") {
      var file = this.$(this.inputBlockName)[0].files[0];
      formData.append(this.makeAttrWrapper(this.model.attachmentType), file);
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
      }
    });
  },

  makeAttrWrapper: function (attr) {
    return this.model.type + "[" + attr + "]";
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
