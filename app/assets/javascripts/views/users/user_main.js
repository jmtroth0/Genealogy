Genealogy.Views.UserMain = Backbone.View.extend({

  template: JST['users/main'],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({user: this.user}));
    return this;
  }
});
