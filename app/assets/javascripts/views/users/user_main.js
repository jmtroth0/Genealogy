Genealogy.Views.UserMain = Backbone.View.extend({

  template: JST['users/main'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    return this;
  }
});
