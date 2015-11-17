Genealogy.Views.UserMain = Backbone.View.extend({

  template: JST['users/main'],
  className: 'main',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    // $(window).on("resize", this.setNavLocation.bind(this));
  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    this.addSectionUnits();
    // this.setNavLocation();
    return this;
  },

  addSectionUnits: function () {
    var $sectionUnits = this.$el.find('.section.nav-options');
    this.model.section().units().forEach(function(unit){
      var $unit = $('<li class="nav group">' +
        '<a href="#/units/' + unit.escape('name') + '">' +
        unit.escape('name') + '</a></li>');
      $sectionUnits.append($unit);
    });
  },

  setNavLocation: function (e) {
    var unitsWidth = this.model.section().units().length * 180;
    // unitsWidth = unitsWidth < window.innerWidth - 100
    if (window.innerWidth > 550) {
      this.$el.find('ul.nav-options').css('width', '480px');
      this.$el.find('ul.section.nav-options').css('width', unitsWidth);
    } else {
      this.$el.find('ul.nav-options').css('width', '160px');
    }
  }
});
