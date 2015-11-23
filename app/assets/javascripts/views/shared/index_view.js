Genealogy.Views.IndexView = Backbone.CompositeView.extend({
/*
make sure to extend formModal mixin and
declare formViewType and indexItemView
on extensions
*/

  template: JST['shared/index'],

  events: {
    "click button.new-model": "openForm"
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addModel);
    this.listenTo(this.collection, 'remove', this.removeModel);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template());
    this.placeModels();
    return this;
  },

  placeModels: function () {
    this.collection.forEach(function (model){
      this.addModel(model);
    }.bind(this));
  },

  addModel: function (model) {
    var modelView = new this.indexItemView({
      model: model,
      remove: this.removeModel.bind(this)
    });
    this.addSubview('ul.collection-index', modelView);
    return modelView;
  },

  removeModel: function (model, collection) {
    this.removeModelSubview('ul.collection-index', model);
  }
});
