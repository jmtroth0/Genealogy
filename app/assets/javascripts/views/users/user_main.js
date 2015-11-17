Genealogy.Views.UserMain = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  studentTemplate: JST['users/student'],
  teacherTemplate: JST['users/teacher'],
  className: 'main',

  events: {
    "click .close-modal": "close",
    "click .edit": "editSection",
    'click ul.sections-list': 'toggleSectionShow',
    'click button.edit-section': 'editSection',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    if (!this.model.escape('type')) { return; } // put in a waiting page
    if (this.model.escape('type') === "Student") {
      this.runStudentRender();
    } else {
      this.runTeacherRender();
    }
    return this;
  },

  runStudentRender: function () {
    this.$el.html(this.studentTemplate({ user: this.model }));
    this.addSectionUnits();
  },

  runTeacherRender: function () {
    this.$el.html(this.teacherTemplate({ user: this.model }));
    this.formViewType = Genealogy.Views.SectionFormView;
    this.addSections();
  },

  addSectionUnits: function () {
    var $sectionUnits = this.$el.find('.section.nav-options');
    this.model.section().units().forEach(function(unit){
      var $unit = $('<li class="nav group">' +
        '<a href="#/submissions/' + unit.escape('name') + '">' +
        unit.escape('name') + '</a></li>');
      $sectionUnits.append($unit);
    });
  },

  addSections: function () {
    var $sections = this.$el.find('.sections-list');
    this.model.sections().forEach(function(section) {
      var $section = $('<li class="section">' +
        (section.escape('name') || section.escape('year')) +
        '</li>'
      );
      var $units = $('<ul class="units-list"></ul>');
      section.units().forEach(function(unit){
        var $unit = $('<li class="unit hidden">' + unit.escape('name') + '</li>');
        $units.append($unit);
      });
      $section.append($units);
      var $button = $('<button class="edit-section hidden">Edit</button>');
      $button.data('section_id', section.id);
      $section.append($button);
      $sections.append($section);
    });
  },

  toggleSectionShow: function (e) {
    e.preventDefault();
    $(e.target).find('.unit').toggleClass('hidden');
    $(e.target).find('button').toggleClass('hidden');
  },

  editSection: function (e) {
    e.preventDefault();
    var section = this.model.sections().getOrFetch($(e.currentTarget).data('section_id'));
    this.openForm({model: section});
  }
}));
