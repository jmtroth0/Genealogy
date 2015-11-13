Genealogy.Views.UserMain = Backbone.View.extend({

  template: JST['users/main'],
  className: 'main',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    $(window).on("resize", this.setNavLocation.bind(this));
  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    this.setNavLocation();
    return this;
  },

  setNavLocation: function (e) {
    /*if (window.innerWidth > 1100) {
      this.$el.find('ul.nav-options').css('width', '960px');
    } else */if (window.innerWidth > 600) {
      this.$el.find('ul.nav-options').css('width', '480px');
    } else {
      this.$el.find('ul.nav-options').css('width', '160px');
    }
  }
});
