Genealogy.Views.ShowPhoto = Backbone.View.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/show'],
  className: "photo-show-container",

  events: {
    "click .close-modal": "close"
  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(this.makeModal({ content: content }));
    return this;
  },

  close: function () {
    this.remove();
  }
}));
