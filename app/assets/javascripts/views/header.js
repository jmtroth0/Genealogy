Genealogy.Views.Header = Backbone.View.extend({
  template: JST['shared/header'],
  className: 'header-container',

  events: {
    'click button.sign-out': 'signOut',
  },

  initialize: function () {

  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  signOut: function (e) {
    e.preventDefault();
    Genealogy.currentUser.signOut();
  }
});
