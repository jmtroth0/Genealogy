Genealogy.Views.TeacherMain = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['users/teacher'],
  className: 'main',

  events: {
    "click .close-modal": "close",
    'click ul.sections-list': 'openSection',
    'click button.edit-section': 'editSection',
    'click button.new-section': 'newSection',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addModel);
    this.listenTo(this.collection, 'remove', this.removeModel);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.formViewType = Genealogy.Views.SectionFormView;
    this.addSections();
  },

  addSections: function () {
    var $sections = this.$el.find('.sections-list');
    this.model.sections().forEach(function(section) {
      this.placeSection(section);
      // var $units = $('<ul class="units-list"></ul>');
      // section.units().forEach(function(unit){
      //   var $unit = $('<li class="unit hidden">' + unit.escape('name') + '</li>');
      //   $units.append($unit);
      // });
      // $section.append($units);
      // var $button = $('<button class="edit-section hidden">Edit</button>');
      // $button.data('section_id', section.id);
      // $section.append($button);
      // $sections.append($section);
    }.bind(this));
  },

  placeSection: function (section) {
    var modelView = new Genealogy.Views.SectionIndexItem({
      model: section,
      remove: this.removeModel.bind(this)
    });
    this.addSubview('ul.sections-list', modelView);
    return modelView;
  },

  removeModel: function (model, collection) {
    this.removeModelSubview('ul.sections-list', model);
  },

  openSection: function (e) {
    e.preventDefault();
    var section = this.model.sections().getOrFetch($(e.target).data('section-id'));
    this.openSectionModal(section);
  },

  openSectionModal: function (section) {
    if (this.$el.find('section.modal').length !== 0) { return; }
    var sectionShow = new Genealogy.Views.ShowSection({
      model: section
    });
    $('#backdrop').prepend(sectionShow.render().$el);
  },

  editSection: function (e) {
    e.preventDefault();
    var section = this.model.sections().getOrFetch($(e.currentTarget).data('section-id'));
    this.openForm({model: section});
  },

  newSection: function (e) {
    e.preventDefault();
    this.openForm({
      model: new Genealogy.Models.Section(),
      collection: this.model.sections()
    });
  }
}));
