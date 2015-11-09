
Genealogy.Mixins.FormModal = {
  openForm: function (options) {
    if (this.$el.find('section.form-modal').length !== 0) { return; }

    var model = this.model || new this.collection.model();
    var collection = this.collection || this.model.collection;

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

Genealogy.Mixins.FormView = {

  initializeForm: function (options){
    this.closeForm = options.closeCallback;
    this.addEvents({
      'click button.close-form': 'closeForm',
      "submit form": "submitForm"
    });
  },

  renderForm: function () {
    var $template = this.makeModal({
      content: this.template({
        model: this.model
      })
    });
    this.$el.append($template);
  },

  makeModal: function (options) {
    var modal = JST['shared/modal']({content: options.content});
    return $(modal);
  },

  addEvents: function(events) {
    this.delegateEvents( _.extend(this.events, events) );
  },
};
