Genealogy.Views.ShowPhoto = Genealogy.Views.ShowView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/show'],
  className: "photo-show-container",
  formViewType: Genealogy.Views.PhotoFormView,

  render: function () {
    var content = this.template({ photo: this.model });
    this.$el.html(this.makeModal({ content: content }));
    $(window).on('resize', this.adjustPhotoSize.bind(this));
    this.adjustPhotoSize();
    this.$el.find('article.content').addClass('group');
    return this;
  },

  adjustPhotoSize: function () {
    var $img = this.$el.find('img');
    var width = window.innerWidth * 0.55;
    var height = window.innerHeight * 0.6;
    $img.css('max-width', width);
    $img.css('max-height', height);
  },
  
  remove: function () {
    $(window).off("resize", this.adjustPhotoSize);
    Backbone.View.prototype.remove.apply(this, arguments);
  }
}));
