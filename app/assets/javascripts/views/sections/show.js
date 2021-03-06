Genealogy.Views.ShowSection = Genealogy.Views.ShowView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['sections/show'],
  className: "section-show-container",
  formViewType: Genealogy.Views.SectionFormView,

  events: {
    'click button.new-unit': 'newUnit'
  },

  initialize: function (options) {
    Genealogy.Views.ShowView.prototype.initialize.call(this, options);
    this.listenTo(this.model.units(), 'add', this.placeUnit);
    this.listenTo(this.model.units(), 'remove', this.removeUnit);
  },

  render: function () {
    var content = this.template({ section: this.model });
    this.$el.html(this.makeModal({ content: content }));
    this.model.units().forEach(function(unit) {
      this.placeUnit(unit);
    }.bind(this));
    return this;
  },

  placeUnit: function (unit) {
    var modelView = new Genealogy.Views.UnitIndexItem({
      model: unit,
      remove: this.removeUnit.bind(this)
    });
    this.addSubview('ul.units-list', modelView);
    return modelView;
  },

  removeUnit: function (model, collection) {
    this.removeModelSubview('ul.units-list', model);
  },

  openUnit: function (e) {
    e.preventDefault();
    var unit = this.model.units().getOrFetch($(e.target).data('unit-id'));
    if (this.$el.find('unit.modal').length !== 0) { return; }
    var unitShow = new Genealogy.Views.ShowUnit({
      model: unit
    });
    $('#backdrop').prepend(unitShow.render().$el);
  },

  editUnit: function (e) {
    e.preventDefault();
    var unit = this.model.units().getOrFetch($(e.currentTarget).data('unit-id'));
    this.openForm({model: unit});
  },

  newUnit: function (e) {
    e.preventDefault();
    if (this.$el.find('section.form-modal').length !== 0) { return; }

    this.formView = new Genealogy.Views.UnitFormView({
      model: new Genealogy.Models.Unit(),
      collection: this.model.units(),
      section_id: this.model.id,
      closeCallback: this.closeForm.bind(this)
    });
    this.$el.append("<div class='form-space'>");
    this.addSubview('div.form-space', this.formView);
  },
}));
