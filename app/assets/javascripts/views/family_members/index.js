Genealogy.Views.FamilyIndex = Backbone.IndexView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  className: 'family-main-index',

  initialize: function (options) {
    this.user = options.user;
    this.collection = this.user.family();
    this.listenTo(this.user, 'sync', this.render);

    this.formViewType = Genealogy.Views.PersonFormView;
    this.indexItemView = Genealogy.Views.FamilyIndexItem;

    Backbone.IndexView.prototype.initialize.call(this);
  },

  addModel: function (model) {
    var modelView = new this.indexItemView({
      model: model,
      remove: this.removeModel.bind(this)
    });

    var generation = model.generation();
    var $collection = this.$el.find('ul.collection-index');

    var $generationalSet = $collection.find('li.' + generation);
    if ($generationalSet.length === 0) {
      this.makeGenSet($collection, generation);
    }

    this.addSubview('ul.' + generation, modelView);
    return modelView;
  },

  removeModel: function (model) {
    this.removeModelSubview('ul.' + model.generation(), model);
  },

  makeGenSet: function ($rootEl, generation) {
    var $li = $('<li class="' + generation + ' generation group">');
    var $generationalSet = $('<ul class=' + generation + '>');
    $li.append("<h2>" + generation + "</h2>");
    $li.append($generationalSet);
    $rootEl.append($li);
  }
}));
