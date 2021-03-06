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

// only works for sorted array
Backbone.Collection.prototype.getNextModel = function (model) {
  for (var i = 0; i < this.length; i++) {
    if (this.at(i).id === model.id && i !== this.length - 1) {
      return this.at(i + 1);
    }
  }
  return this.at(0);
};

Backbone.Collection.prototype.getPreviousModel = function (model) {
  for (var i = 0; i < this.length; i++) {
    if (this.at(i).id === model.id) {
      return this.at(i - 1);
    }
  }
};
