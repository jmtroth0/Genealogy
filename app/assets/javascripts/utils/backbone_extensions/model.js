Backbone.Model.prototype.saveFormData = function (formData, options) {
  var method = this.isNew() ? "POST" : "PATCH";
  var model = this;

  $.ajax({
    url: _.result(model, "url"),
    type: method,
    data: formData,
    processData: false,
    contentType: false,
    success: function(resp) {
      model.set(model.parse(resp));
      options.success && options.success(model, resp, options);
    },
    error: function(resp) {
      options.error && options.error(model, resp, options);
    },
  });
};

Backbone.Model.prototype.getNextModel = function () {
  return this.collection.getNextModel(this);
};

Backbone.Model.prototype.getPreviousModel = function () {
  return this.collection.getNextModel(this);
};
