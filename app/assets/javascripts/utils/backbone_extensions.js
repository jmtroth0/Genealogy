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

Backbone.View.prototype.makeModal = function (options) {
  var modal = JST['shared/modal']({content: options.content});
  return $(modal);
};
