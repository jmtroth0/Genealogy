Genealogy.Mixins.FormModal = {
  openForm: function (options) {
    if (this.$el.find('section.form-modal').length !== 0) { return; }

    var model = options.model || this.model || new this.collection.model();
    var collection = options.collection || this.collection || model.collection;
    
    this.formView = new this.formViewType({
      model: model,
      collection: collection,
      closeCallback: this.closeForm.bind(this)
    });
    this.$el.append("<div class='form-space'>");
    this.addSubview('div.form-space', this.formView);
  },

  closeForm: function () {
    this.removeSubview('div.form-space', this.formView);
    this.$el.find('div.form-space').remove();
  },
};
