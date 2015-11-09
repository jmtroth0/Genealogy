Genealogy.Models.Photo = Backbone.Model.extend({
  urlRoot: 'api/photos',

  toJSON: function () {
    return { photo: _.clone( this.attributes ) };
  },

  saveFormData: function (formData, options) {
    var method = this.isNew() ? "POST" : "PATCH";
    var model = this;

    $.ajax({
      url: this.urlRoot,
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp) {
        model.set(model.parse(resp));
        options.success && options.success(model, resp, options);
      },
      error: function(resp) {
        options.error && options.success(model, resp, options);
      },
    });
  },
});
