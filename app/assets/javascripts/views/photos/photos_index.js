Genealogy.Views.PhotosIndex = Backbone.CompositeView.extend(
  _.extend({}, Genealogy.Mixins.FormModal, {

  template: JST['photos/index'],
  formViewType: Genealogy.Views.PhotoFormView,

  events: {
    "click button.upload-photo": "openForm",
  },

  initialize: function () {
    this.listenTo(this.collection, 'add remove sync', this.render);
  },

  render: function () {
    this.$el.html(this.template({ photos: this.collection }));
    return this;
  },

  // openForm: function () {
  //   if (this.$el.find('section.form-modal').length !== 0) { return; }
  //   this.formView = new Genealogy.Views.PhotoFormView({
  //     model: new Genealogy.Models.Photo(),
  //     collection: this.collection,
  //     closeCallback: this.closeForm.bind(this)
  //   });
  //   this.$el.append("<div class='form-space'>");
  //   this.addSubview('div.form-space', this.formView);
  // },
  //
  // closeForm: function () {
  //   this.removeSubview('div.form-space', this.formView);
  //   this.$el.find('div.form-space').remove();
  // },
}));
