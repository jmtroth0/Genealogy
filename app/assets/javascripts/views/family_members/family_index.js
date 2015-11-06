Genealogy.Views.FamilyIndex = Backbone.View.extend({

  template: JST['family_members/index'],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, 'sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({family: this.user.family()}));
    return this;
  }
});
