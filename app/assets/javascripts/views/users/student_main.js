Genealogy.Views.StudentMain = Backbone.CompositeView.extend({

  template: JST['users/student'],
  className: 'main',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ user: this.model }));
    this.addSectionUnits();
  },

  addSectionUnits: function () {
    var $sectionUnits = this.$el.find('.section.nav-options');
    this.model.section().units().forEach(function(unit){
      var $unit = $('<li class="nav group">' +
        '<a href="#/submissions/' + unit.escape('name').toLowerCase() + '/' + unit.id + '">' +
        unit.escape('name') + '</a></li>');
      $sectionUnits.append($unit);
    });
  },
});
