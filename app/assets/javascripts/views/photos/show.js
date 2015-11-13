Genealogy.Views.ShowPhoto = Backbone.View.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/show'],
  className: "photo-show-container",

  events: {
    "click .close-modal": "close",

  },

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(this.makeModal({ content: content }));
    $(window).on('resize', this.setStyle.bind(this));
    this.setStyle();
    return this;
  },

  setStyle: function () {
    var $img = this.$el.find('img');
    var width = window.innerWidth * 0.7;
    var height = window.innerHeight * 0.7;
    $img.css('max-width', width);
    $img.css('max-height', height);
  },

  close: function () {
    this.remove();
  },

  remove: function () {
    $(window).off("resize", this.setStyle);
    Backbone.View.prototype.remove.apply(this, arguments);
  }
}));
