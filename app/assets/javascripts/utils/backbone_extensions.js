Backbone.Model.prototype.saveFormData = function (formData, options) {
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
};

Backbone.Collection.prototype.getOrFetch = function (id) {
  var model = this.get(id);
  var collection = this;

  if (model){
    model.fetch();
  } else {
    model = new this.model ({id: id});
    collection.add(model);
    model.fetch({
      error: collection.remove
    });
  }
  return model;
};

Backbone.View.prototype.addEvents = function(events) {
  this.events = this.events || {};
  this.delegateEvents( _.extend(this.events, events) );
};
